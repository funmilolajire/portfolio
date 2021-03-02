import { useState } from 'react';
import { saveMessage } from '../utils/firebase';

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

    return (
        <section className="flex justify-between pt-12 border-t border-gdb border-opacity-10 pb-28 ContactMe--Form">
            <h2 className="text-5xl font-bold">Contact Me</h2>
            <form name="portfolio-contact-form" id="portfolio-contact-form" onSubmit={handleSubmit} method="post" className="w-7/12 text-sm">
                <div data-submission-success className="relative hidden py-2 mb-3 bg-green-100 rounded-md">
                    <p className="text-base text-center"><span className="pr-2 text-green-500">✔
                    </span>Your Form Has Been Successfully Submitted</p>
                </div>
                <div data-submission-error className="relative hidden py-2 mb-3 bg-red-100 rounded-md">
                    <p className="text-base text-center"><span className="pr-2 text-red-500">❌
                    </span>Fill all required fields</p>
                </div>
                <div className="relative pb-6 name bg-gray-50">
                    <label htmlFor="name" className="block pb-2 font-bold opacity-80">Name</label>
                    <input data-name value={name} onChange={handleChange} className="block w-full py-2 pl-4 bg-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-opacity-40 bg-opacity-40" type="text" name="name" id="name" placeholder="Enter name here..." />
                </div>
                <div className="pb-6 email">
                    <label htmlFor="email" className="block pb-2 font-bold opacity-80">Email Address</label>
                    <input value={email} data-email onChange={handleChange} className="block w-full py-2 pl-4 bg-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-opacity-40 bg-opacity-40" type="email" name="email" id="email" placeholder="Enter email here..." />
                </div>
                <div className="pb-6 message">
                    <label htmlFor="message" className="block pb-2 font-bold opacity-80">Message</label>
                    <textarea value={message} data-message onChange={handleChange} className="block w-full py-2 pl-4 bg-gray-300 rounded-md resize-none placeholder-opacity-40 focus:outline-none focus:ring-1 focus:ring-green-500 bg-opacity-40" name="message" id="message" cols="30" rows="10" placeholder="How can I help?"></textarea>
                </div>
                <button name="submit" type="submit" style={{ letterSpacing: "2px" }} className="h-12 text-xs font-bold text-white uppercase transition-all duration-700 ease-out rounded-md hover:-translate-y-1 transform-gpu hover:bg-sdc bg-db w-52 focus:outline-none focus:ring-1 focus:ring-green-500">Send Message</button>
            </form>
        </section>
    )
}