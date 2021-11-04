import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SkillSetIcons } from "./SkillSetIcons";
import { useLocation } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

export const SkillSet = () => {
    const skillSetsBoxRef = useRef(null);
    const skillSetsHeadingRef = useRef(null);
    const skillSetsParagraphRef = useRef(null);
    const location = useLocation()

    useLayoutEffect(() => {
        if (location.pathname === '/')
            gsap.from([skillSetsHeadingRef.current], {
                scrollTrigger: {
                    trigger: [skillSetsBoxRef.current],
                    toggleActions: "restart none none reset",
                    // start: "center bottom"
                },
                y: -50,
                opacity: 0,
                duration: 0.5,
            })
    })

    useLayoutEffect(() => {
        if (location.pathname === '/')
            gsap.from([skillSetsParagraphRef.current], {
                scrollTrigger: {
                    trigger: [skillSetsBoxRef.current],
                    toggleActions: "restart none none reset",
                    // start: "center bottom"
                },
                y: -50,
                opacity: 0,
                duration: 0.5,
                delay: 0.5
            })
    })

    return (
        <div ref={skillSetsBoxRef} className="Home--SkillSet">
            <h2 ref={skillSetsHeadingRef}>My Toolbox Of Skills</h2>
            <p ref={skillSetsParagraphRef}>A collection of web building tools and technologies I'm comfortable working with: </p>
            <SkillSetIcons />
        </div>
    )
}