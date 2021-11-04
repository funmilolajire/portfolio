import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiBootstrap, SiTailwindcss, SiReact, SiGit, SiNodedotjs, SiJest, SiNextdotjs, SiNestjs, SiExpress, SiMongodb, SiMysql, SiPostgresql, SiAntdesign } from 'react-icons/si'
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
                toggleActions: "restart none none reset",
                // start: "center bottom"
            },
            opacity: 0,
            y: '-50',
            scale: 1.2,
            duration: 1,
            delay: 1,
            stagger: {
                amount: 1.5
            }
        })
        gsap.from(".label", {
            scrollTrigger: {
                trigger: [iconsBoxRef.current],
                toggleActions: "restart none none reset",
            },
            opacity: 0,
            scale: 1.2,
            delay: 1,
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
                <span ref={iconRef} className="icon"><SiAntdesign title="Antd" /></span>
                <span ref={iconLabelRef} className="label">AntD</span>
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
                <span ref={iconRef} className="icon"><SiNextdotjs title="NextJs" /></span>
                <span ref={iconLabelRef} className="label">NextJs</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiNodedotjs title="NodeJs" /></span>
                <span ref={iconLabelRef} className="label">NodeJS</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiExpress title="expressJs" /></span>
                <span ref={iconLabelRef} className="label">ExpressJS</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiNestjs title="NestJs" /></span>
                <span ref={iconLabelRef} className="label">NestJS</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiMongodb title="MongoDB" /></span>
                <span ref={iconLabelRef} className="label">MongoDB</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiMysql title="MySQL" /></span>
                <span ref={iconLabelRef} className="label">MySQL</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiPostgresql title="PostgreSQL" /></span>
                <span ref={iconLabelRef} className="label">PostgreSQL</span>
            </div>
            <div>
                <span ref={iconRef} className="icon"><SiJest title="Jest" /></span>
                <span ref={iconLabelRef} className="label">Jest</span>
            </div>
        </div>
    )
}