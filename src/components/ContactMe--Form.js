import { useState } from 'react';
import { useRef, useLayoutEffect } from 'react';
import { saveMessage } from '../utils/firebase';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

export const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const { name, email, message } = form;

    const handleFormError = fieldData => {
        const fieldName = document.querySelector("[data-" + fieldData + "]")
        fieldName.classList.remove('focus:ring-green-500')
        fieldName.classList.add('focus:ring-red-500')
        fieldName.focus()
    }
    const handleFormSuccess = fieldData => {
        const fieldName = document.querySelector("[data-" + fieldData + "]")
        if ((fieldName.classList).contains('focus:ring-red-500')) {
            fieldName.classList.remove('focus:ring-red-500')
            fieldName.classList.add('focus:ring-green-500')
        }
    }
    const handleChange = ({ target }) => {
        setForm(prev => ({
            ...prev,
            [target.name]: target.value
        }))
        if (target.name || email.includes('@')) {
            handleFormSuccess(`${target.name}`)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const successMessage = document.querySelector("[data-submission-success]")
        const errorMessage = document.querySelector("[data-submission-error]")
        if (!name || !email || !message) {
            console.log(errorMessage.classList)
            errorMessage.classList.remove("hidden")
            !message ? handleFormError("message") : handleFormSuccess("message");
            !email ? handleFormError("email") : handleFormSuccess("email");
            !name ? handleFormError("name") : handleFormSuccess("name");
        } else {
            if (!errorMessage.classList.contains("hidden")) {
                errorMessage.classList.add("hidden")
            }
            saveMessage(name, email, message);
            setForm({ name: '', email: '', message: '' });
            successMessage.classList.remove("hidden")
            successMessage.scrollIntoView()
            setTimeout(() => {
                successMessage.classList.add("hidden")
            }, 5000)
        }
    }

    //animations
    const formBoxRef = useRef(null);
    const formInputsRef = useRef(null);
    const formHeadingRef = useRef(null);
    const location = useLocation()

    useLayoutEffect(() => {
        if (location.pathname === '/contact-me')
            gsap.from([formInputsRef.current], {
                scrollTrigger: {
                    trigger: [formBoxRef.current],
                    toggleActions: "restart none restart none",
                },
                opacity: 0,
                x: '100vw',
                duration: 1,
            })
    })
    useLayoutEffect(() => {
        if (location.pathname === '/contact-me')

            gsap.from([formHeadingRef.current], {
                scrollTrigger: {
                    trigger: [formBoxRef.current],
                    toggleActions: "restart none restart none",
                },
                opacity: 0,
                x: '-100vw',
                duration: 1
            })
        gsap.from(".field", {
            scrollTrigger: {
                trigger: [formBoxRef.current],
                toggleActions: "restart none restart none",
            },
            opacity: 0,
            scale: 1.2,
            duration: 1,
            delay: 2,
            stagger: {
                amount: 2
            }
        })
    })

    return (
        <section ref={formBoxRef} className="ContactMe--Form">
            <h2 ref={formHeadingRef}>Contact Me</h2>
            <form ref={formInputsRef} onSubmit={handleSubmit} method="post" name="portfolio-contact-form" id="portfolio-contact-form">
                <div className="hidden" data-submission-success>
                    <p><span>✔
                    </span>Your Form Has Been Successfully Submitted</p>
                </div>
                <div className="hidden" data-submission-error>
                    <p><span>❌
                    </span>Fill all required fields</p>
                </div>
                <div className="field name">
                    <label htmlFor="name">Name *</label>
                    <input data-name value={name} onChange={handleChange} className="focus:ring-green-500" type="text" name="name" id="name" placeholder="Enter name here..." />
                </div>
                <div className="email field">
                    <label htmlFor="email">Email Address *</label>
                    <input value={email} data-email onChange={handleChange} className="focus:ring-green-500" type="email" name="email" id="email" placeholder="Enter email here..." />
                </div>
                <div className="message field">
                    <label htmlFor="message">Message *</label>
                    <textarea value={message} data-message onChange={handleChange} className="focus:ring-green-500" name="message" id="message" cols="30" rows="10" placeholder="How can I help?"></textarea>
                </div>
                <button name="submit" type="submit">Send Message</button>
            </form>
        </section>
    )
}