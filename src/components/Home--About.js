import { Link } from "react-router-dom";

export const About = () => (
    <div className="Home--About" data-about-me id="about-me">
        <picture>
            <source media="(min-width: 880px)"
                srcset="/images/homepage/desktop/image-homepage-profile.jpg,
                /images/homepage/desktop/image-homepage-profile@2x.jpg 2x" />
            <source media="(min-width: 590px)"
                srcset="/images/homepage/tablet/image-homepage-profile.jpg,
                /images/homepage/tablet/image-homepage-profile@2x.jpg 2x" />
            <img loading="lazy" alt="home-profile" srcset="/images/homepage/mobile/image-homepage-profile.jpg,
                /images/homepage/mobile/image-homepage-profile@2x.jpg 2x"/>
        </picture>
        <article>
            <h2>About Me</h2>
            <p>I’m a junior front-end developer looking for freelance opportunities or a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices/frameworks and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I have experience building small and medium websites, web apps, using animation libraries such as gsap and framer motion. I also have full-stack developer experience working with nodejs, expressjs, MySql, MongoDB,{/* Postgresql, firebase*/} and some other tools and frameworks. I’m based in Lagos, Nigeria, but I’m happy working remotely. I’d love you to check out my work.</p>
            <Link to="/projects">
                <button>
                    Go To Portfolio
                    </button>
            </Link>
        </article>
    </div>
)
