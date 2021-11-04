import { useRef, useLayoutEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const CTA = () => {
    const location = useLocation();
    const ctaBoxRef = useRef(null);
    const headingRef = useRef(null);
    const dividerRef = useRef(null);
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
        if (location.pathname !== "/contact-me")
            gsap.from([headingRef.current], {
                scrollTrigger: {
                    trigger: [ctaBoxRef.current],
                    toggleActions: "restart none none reset",
                    start: "center bottom"
                },
                opacity: 0,
                x: -200,
                duration: 2
            })
    })

    useLayoutEffect(() => {
        if (location.pathname !== "/contact-me")
            gsap.from([dividerRef.current], {
                scrollTrigger: {
                    trigger: [ctaBoxRef.current],
                    toggleActions: "restart none none reset",
                    start: "center bottom"
                },
                opacity: 0,
                scale: 0,
                duration: 2
            })
    })

    useLayoutEffect(() => {
        if (location.pathname !== "/contact-me")
            gsap.from([buttonRef.current], {
                scrollTrigger: {
                    trigger: [ctaBoxRef.current],
                    toggleActions: "restart none none reset",
                    start: "center bottom"
                },
                opacity: 0,
                x: 200,
                duration: 2
            })
    })

    return (
        <>
            {
                location.pathname !== "/contact-me" &&
                <section ref={ctaBoxRef} data-scroll className="CTA">
                    <h3 ref={headingRef}>
                        Interested in doing a project together?
                    </h3>
                    <div ref={dividerRef} className="cta-divider"></div>
                    <Link ref={buttonRef} to="/contact-me">
                        <button>
                            Contact Me
                        </button>
                    </Link>
                </section>
            }
        </>
    )
}