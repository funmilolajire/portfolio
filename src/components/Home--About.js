import { useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    const aboutBoxRef = useRef(null)
    const aboutHeaderRef = useRef(null)
    const aboutTextRef = useRef(null)
    const aboutButtonRef = useRef(null)
    const location = useLocation()

    //animations
    useLayoutEffect(() => {
        if (location.pathname === '/')
            gsap.from([aboutHeaderRef.current], {
                scrollTrigger: {
                    trigger: [aboutBoxRef.current],
                    // start: "top bottom",
                    toggleActions: "restart none restart none",
                    // end: () => "+=" + document.querySelector('.Home--About').offsetWidth
                },
                y: -100,
                opacity: 0,
                duration: 2,
            })
    })

    useLayoutEffect(() => {
        if (location.pathname === '/')
            gsap.from([aboutTextRef.current], {
                scrollTrigger: {
                    trigger: [aboutBoxRef.current],
                    // start: "top bottom",
                    toggleActions: "restart none restart none",
                    // end: () => "+=" + document.querySelector('.Home--About').offsetWidth
                },
                x: -200,
                opacity: 0,
                duration: 2
            })
    })

    useLayoutEffect(() => {
        if (location.pathname === '/')
            gsap.from([aboutButtonRef.current], {
                scrollTrigger: {
                    trigger: [aboutBoxRef.current],
                    // start: "top bottom",
                    toggleActions: "restart none restart none",
                    // end: () => "+=" + document.querySelector('.Home--About').offsetWidth
                },
                y: 100,
                opacity: 0,
                duration: 3
            })
    })



    return (
        <div ref={aboutBoxRef} className="Home--About" data-about-me id="about-me">
            {/* <picture>
            <source media="(min-width: 880px)"
                srcset="/images/homepage/desktop/image-homepage-profile.jpg,
                /images/homepage/desktop/image-homepage-profile@2x.jpg 2x" />
            <source media="(min-width: 590px)"
                srcset="/images/homepage/tablet/image-homepage-profile.jpg,
                /images/homepage/tablet/image-homepage-profile@2x.jpg 2x" />
            <img loading="lazy" alt="-profile" srcset="/images/homepage/mobile/image-homepage-profile.jpg,
                /images/homepage/mobile/image-homepage-profile@2x.jpg 2x"/>
        </picture> */}
            <article>
                <h2 ref={aboutHeaderRef}>About Me</h2>
                <p ref={aboutTextRef}>I’m a junior front-end developer looking for freelance opportunities or a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices/frameworks and writing clean JavaScript/TypeScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I have experience building small and medium websites, web apps, using animation libraries such as gsap and framer motion. I also have full-stack developer experience working with nodejs, expressjs, nestjs, MySql, MongoDB, PostgreSql{/* , firebase*/} and some other tools and frameworks. I’m based in Lagos, Nigeria, but I’m happy working remotely. I’d love you to check out my work.</p>
                <Link ref={aboutButtonRef} to="/projects">
                    <button>
                        Go To Portfolio
                    </button>
                </Link>
            </article>
        </div>
    )
}