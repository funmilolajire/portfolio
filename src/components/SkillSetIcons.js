import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiBootstrap, SiTailwindcss, SiReact, SiGit, SiNodeDotJs, SiJest } from 'react-icons/si'
import { DiSass } from 'react-icons/di'
import { useLayoutEffect, useRef } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const SkillSetIcons = () => {
    const iconsBoxRef = useRef(null);
    const iconRef = useRef(null);
    const iconLabelRef = useRef(null);

    useLayoutEffect(() => {
        gsap.from(".icon", {
            scrollTrigger: {
                trigger: [iconsBoxRef.current],
                toggleActions: "restart none restart none",
            },
            opacity: 0,
            y: '-50',
            scale: 1.2,
            duration: 1,
            stagger: {
                amount: 1
            }
        })
        gsap.from(".label", {
            scrollTrigger: {
                trigger: [iconsBoxRef.current],
                toggleActions: "restart none restart none",
            },
            opacity: 0,
            scale: 1.2,
            duration: 1,
            stagger: {
                amount: 1
            }
        })

    })

    return (
        <div ref={iconsBoxRef} className="SkillSetIcons">
            <div>
                <span ref={iconRef} className="icon"><SiHtml5 title="Html5" /></span>
                <span ref={iconLabelRef} className="label">Html5</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiCss3 title="Css3" /></span>
                <span ref={iconLabelRef} className="label">Css3</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiJavascript title="JavaScript" /></span>
                <span ref={iconLabelRef} className="label">Javascript</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiTypescript title="TypeScript" /></span>
                <span ref={iconLabelRef} className="label">Typescript</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiBootstrap title="Bootstrap" /></span>
                <span ref={iconLabelRef} className="label">Bootstrap</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><DiSass title="Sass" /></span>
                <span ref={iconLabelRef} className="label">Scss</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiTailwindcss title="Tailwindcss" /></span>
                <span ref={iconLabelRef} className="label">Tailwindcss</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiGit title="Git" /></span>
                <span ref={iconLabelRef} className="label">Git</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiReact title="React" /></span>
                <span ref={iconLabelRef} className="label">React</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiNodeDotJs title="NodeJs" /></span>
                <span ref={iconLabelRef} className="label">NodeJS</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiJest title="Jest" /></span>
                <span ref={iconLabelRef} className="label">Jest</span>
            </div>
        </div>
    )
}