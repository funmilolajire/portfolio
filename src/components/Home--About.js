import { Link } from "react-router-dom";

export const About = () => {
    return (
        <div className="flex pt-12 mt-24 Home--About min-h-96" data-about-me id="about-me">
            <picture className="w-1/2 overflow-hidden rounded-full">
                <source media="(min-width: 880px)"
                    srcset="/images/homepage/desktop/image-homepage-profile.jpg,
                /images/homepage/desktop/image-homepage-profile@2x.jpg 2x" />
                <source media="(min-width: 400px)"
                    srcset="/images/homepage/tablet/image-homepage-profile.jpg,
                /images/homepage/tablet/image-homepage-profile@2x.jpg 2x" />
                <img loading="lazy" alt="home-profile" className="object-fill w-full h-full" srcset="/images/homepage/mobile/image-homepage-profile.jpg,
                /images/homepage/mobile/image-homepage-profile@2x.jpg 2x"/>
            </picture>
            <article className="w-1/2 pb-12 ml-32 border-t border-b pt-14 max-w-max About-Me border-1 border-gdb border-opacity-10">
                <h2 className="text-4xl font-bold">About Me</h2>
                <p className="pb-6 text-base text-justify pt-7 w-80 opacity-80">I’m a junior front-end developer looking for freelance opportunities or a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices/frameworks and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I have experience building small and medium websites, web apps, using animation libraries such as gsap and framer motion. I also have full-stack developer experience working with nodejs, expressjs, MySql, MongoDB,{/* Postgresql, firebase*/} and some other tools and frameworks. I’m based in Lagos, Nigeria, but I’m happy working remotely. I’d love you to check out my work.</p>
                <Link to="/projects"><button style={{ letterSpacing: "2px" }} className="h-12 text-xs font-bold uppercase transition-all duration-500 ease-in border focus:outline-none focus:ring-1 focus:ring-gdb w-52 transform-gpu hover:bg-gdb hover:text-white border-opacity-80 border-gdb cta">
                    Go To Portfolio
                </button></Link>
            </article>
        </div>
    )
}