import { useEffect, useState } from 'react';
import { useRef, useLayoutEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
import { TextInput } from './TextInput';
gsap.registerPlugin(ScrollTrigger);

export const ContactForm = () => {
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
                    toggleActions: "restart none none reset",
                    start: "center bottom"
                },
                opacity: 0,
                x: '100vw',
                duration: 1,
            })
    }, [location.pathname])
    useLayoutEffect(() => {
        if (location.pathname === '/contact-me')

            gsap.from([formHeadingRef.current], {
                scrollTrigger: {
                    trigger: [formBoxRef.current],
                    toggleActions: "restart none none reset",
                    start: "center bottom"
                },
                opacity: 0,
                x: '-100vw',
                duration: 1
            })
        gsap.from(".field", {
            scrollTrigger: {
                trigger: [formBoxRef.current],
                toggleActions: "restart none none reset",
                start: "center bottom"
            },
            opacity: 0,
            scale: 1.2,
            duration: 1,
            delay: 2,
            stagger: {
                amount: 2
            }
        })
    }, [location.pathname])

    const [isSubmit, setSubmit] = useState(null)
    const [loading, setLoading] = useState(false)
    const initialValues = {
        from_name: '',
        email: '',
        message: ''
    }
    const validationSchema = Yup.object().shape({
        from_name: Yup.string().max(50, 'must be 50 characters or less').required('can\'t be empty'),
        email: Yup.string().email('invalid email address').max(50, 'must be 50 characters or less').required('can\'t be empty'),
        message: Yup.string().required('leave me a message'),
    })
    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            setLoading(true)
            await emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICEID,
                process.env.REACT_APP_EMAILJS_TEMPLATEID,
                '#contact-form',
                process.env.REACT_APP_EMAILJS_USERID)
                .then((result) => {
                    setSubmit('ok')
                    console.log(result.text);
                    resetForm()
                }, (error) => {
                    setSubmit('error')
                    console.log(error.text);
                });
            setLoading(false)
            setSubmitting(false)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        const isSubmitResult = setTimeout(() => setSubmit(null), 3000)
        return () => {
            clearTimeout(isSubmitResult)
        }
    }, [isSubmit])

    return (
        <section ref={formBoxRef} className="ContactMe--Form">
            <h2 ref={formHeadingRef}>Contact Me</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form ref={formInputsRef} id="contact-form" name="contact-form" netlify>
                    {isSubmit === 'ok' && <div data-submission-success>
                        <p><span>✔
                        </span>Your Form Has Been Successfully Submitted!</p>
                    </div>}
                    {isSubmit && isSubmit === 'error' && <div data-submission-error>
                        <p><span>❌
                        </span>An error occurred! Please try again.</p>
                    </div>}
                    <div className="field from_name">
                        <TextInput label="Name" type="text" name="from_name" placeholder="Enter name here..." />
                    </div>
                    <div className="email field">
                        <TextInput label="Email Address" type="email" name="email" placeholder="Enter email here..." />
                    </div>
                    <div className="message field">
                        <TextInput label="Message" as="textarea" name="message" cols="30" rows="10" placeholder="How can I help?" />
                    </div>
                    {loading ? <button type="button"><div className="spinner-4"></div></button> : <button type="submit">Send Message</button>}
                </Form>
            </Formik>
        </section>
    )
}