import { useState, useRef } from 'react';

export const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const { name, email, message } = form;

    const inputRef = useRef();

    const handleChange = ({ target }) => {
        setForm(prev => ({
            ...prev,
            [target.name]: target.value
        }))
        if (!name || !email || !message) {
            let placeholder = '';
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("prevented submission")
        console.log(name, email, message)
        setForm({
            name: '',
            email: '',
            message: ''
        })
    }

    return (
        <div style={{ borderColor: "#33323D" }} className="flex justify-between pt-12 border-t pb-28 border-opacity-10 ContactForm">
            <h2 className="text-5xl font-bold">Contact Me</h2>
            <form name="portfolio-contact-form" onSubmit={handleSubmit} method="post" className="w-7/12 text-sm" encType="text/plain">
                <div className="pb-6 name">
                    <label htmlFor="name" className="block pb-2 font-bold opacity-80">Name</label>
                    <input ref={inputRef} value={name} onChange={handleChange} autoComplete="off" className="block w-full py-2 pl-4 bg-gray-300 rounded-md focus:outline-none focus:ring focus:border-gray-800 placeholder-opacity-40 bg-opacity-40" type="text" name="name" id="name" placeholder="Enter name here..." />
                </div>
                <div className="pb-6 email">
                    <label htmlFor="email" className="block pb-2 font-bold opacity-80">Email Address</label>
                    <input value={email} onChange={handleChange} className="block w-full py-2 pl-4 bg-gray-300 rounded-md focus:outline-none focus:ring focus:border-gray-800 placeholder-opacity-40 bg-opacity-40" type="email" name="email" id="email" placeholder="Enter email here..." />
                </div>
                <div className="pb-6 message">
                    <label htmlFor="message" className="block pb-2 font-bold opacity-80">Message</label>
                    <textarea value={message} onChange={handleChange} className="block w-full py-2 pl-4 bg-gray-300 rounded-md resize-none placeholder-opacity-40 focus:outline-none focus:ring focus:border-gray-800 bg-opacity-40" name="message" id="message" cols="30" rows="10" placeholder="How can I help?"></textarea>
                </div>
                <button type="submit" style={{ backgroundColor: "#203A4C", letterSpacing: "2px" }} className="h-12 text-xs font-bold text-white uppercase rounded-md w-52 focus:outline-none focus:ring focus:border-gray-800">Send Message</button>
            </form>
        </div>
    )
}