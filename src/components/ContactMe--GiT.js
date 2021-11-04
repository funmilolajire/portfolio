import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
import { SocialIcons } from './SocialIcons';
gsap.registerPlugin(ScrollTrigger);

export const GetInTouch = () => {
    const gitBoxRef = useRef(null);
    const gitTextRef = useRef(null);
    const gitHeadingRef = useRef(null);
    const location = useLocation()

    useLayoutEffect(() => {
        if (location.pathname === '/contact-me')
            gsap.from([gitTextRef.current], {
                scrollTrigger: {
                    trigger: [gitBoxRef.current],
                    toggleActions: "restart none none reset",
                    start: "center bottom"
                },
                opacity: 0,
                x: '100vw',
                duration: 1,
            })
    })
    useLayoutEffect(() => {
        if (location.pathname === '/contact-me')

            gsap.from([gitHeadingRef.current], {
                scrollTrigger: {
                    trigger: [gitBoxRef.current],
                    toggleActions: "restart none none reset",
                    start: "center bottom"
                },
                opacity: 0,
                x: '-100vw',
                duration: 1
            })
    })


    return (
        <section ref={gitBoxRef} className="ContactMe--GiT">
            <h2 ref={gitHeadingRef}>Get In Touch</h2>
            <div ref={gitTextRef}>
                <p>
                    I’d love to hear about what you’re working on and how I could help. I’m currently
                    looking for a new role and am open to a wide range of opportunities. But I’m also happy to hear about other
                    opportunities that don’t fit that description.
                    If you have an offer, request or a question, do feel free to check out my online profiles below and get in touch using the form below.
                </p>
                <SocialIcons fillColor="#33323D" />
            </div>
        </section>
    )
}