import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    const heroBoxRef = useRef(null);
    const heroImageRef = useRef(null);
    const heroTextRef = useRef(null);
    const location = useLocation()

    useLayoutEffect(() => {
        if (location.pathname === '/')
            gsap.from([heroImageRef.current], {
                scrollTrigger: {
                    trigger: [heroBoxRef.current],
                    toggleActions: "restart none none reset",
                    start: "center bottom",
                    // end: () => "+=" + document.querySelector('.Home--Hero').offsetWidth
                },
                opacity: 0,
                y: '-100vh',
                scale: 1.2,
                duration: 2,
            })
    })
    useLayoutEffect(() => {
        if (location.pathname === '/')

            gsap.from([heroTextRef.current], {
                scrollTrigger: {
                    trigger: [heroBoxRef.current],
                    toggleActions: "restart none none reset",
                    start: "center bottom",
                    // end: () => "+=" + document.querySelector('.Home--Hero').offsetWidth
                },
                opacity: 0,
                x: '-100vw',
                duration: 2,
                delay: 2
            })
    })

    return (
        <div ref={heroBoxRef} className="Home--Hero">
            <picture className="Hero--Image">
                {/* <source media="(min-width: 880px)"
                srcset="/images/homepage/desktop/image-homepage-hero.jpg,
                /images/homepage/desktop/image-homepage-hero@2x.jpg 2x" />
            <source media="(min-width: 590px)"
                srcset="/images/homepage/tablet/image-homepage-hero.jpg,
                /images/homepage/tablet/image-homepage-hero@2x.jpg 2x" />
            <img loading="lazy" alt="home-hero" srcset="/images/homepage/mobile/image-homepage-hero.jpg,
                /images/homepage/mobile/image-homepage-hero@2x.jpg 2x"/> */}
                <source media="(min-width: 880px)"
                    srcset="/images/desktop.png" />
                <source media="(min-width: 590px)"
                    srcset="/images/Ipadmini.png" />
                <img ref={heroImageRef} loading="lazy" alt="home-hero" srcset="/images/Iphone8+.png" />
            </picture>
            <section ref={heroTextRef} className="Hero--TextContent">
                <h1>Hey, I'm <span>Funmilola.</span> A frontend developer.</h1>
                <div>
                    <a data-scroll href="#about-me">
                        <span>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M0 9l8 4 8-4" />
                                    <path opacity=".5" d="M0 5l8 4 8-4" />
                                    <path opacity=".25" d="M0 1l8 4 8-4" />
                                </g>
                            </svg>
                        </span>

                        <span>
                            About Me
                        </span>
                    </a>
                </div>
            </section>
        </div>
    )
}