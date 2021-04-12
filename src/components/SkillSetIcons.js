import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiBootstrap, SiTailwindcss, SiReact, SiGit, SiNodeDotJs, SiJest } from 'react-icons/si'
import { DiSass } from 'react-icons/di'
export const SkillSetIcons = () => (
    <div className="SkillSetIcons">
        <div>
            <span className="icon"><SiHtml5 title="Html5" /></span>
            <span className="label">Html5</span>
            </div>
        <div>
            <span className="icon"><SiCss3 title="Css3" /></span>
            <span className="label">Css3</span>
            </div>
        <div>
            <span className="icon"><SiJavascript title="JavaScript" /></span>
            <span className="label">Javascript</span>
            </div>
        <div>
            <span className="icon"><SiTypescript title="TypeScript" /></span>
            <span className="label">Typescript</span>
            </div>
        <div>
            <span className="icon"><SiBootstrap title="Bootstrap" /></span>
            <span className="label">Bootstrap</span>
            </div>
        <div>
            <span className="icon"><DiSass title="Sass" /></span>
            <span className="label">Scss</span>
            </div>
        <div>
            <span className="icon"><SiTailwindcss title="Tailwindcss" /></span>
            <span className="label">Tailwindcss</span>
            </div>
        <div>
            <span className="icon"><SiGit title="Git" /></span>
            <span className="label">Git</span>
            </div>
        <div>
            <span className="icon"><SiReact title="React" /></span>
            <span className="label">React</span>
            </div>
        <div>
            <span className="icon"><SiNodeDotJs title="NodeJs" /></span>
            <span className="label">NodeJS</span>
        </div>
        <div>
            <span className="icon"><SiJest title="Jest" /></span>
            <span className="label">Jest</span>
        </div>
    </div>
)