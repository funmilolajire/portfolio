import { NavLink } from 'react-router-dom';
import { SocialIcons } from './SocialIcons';
import { Logo } from './Logo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export const Footer = () => (
    <footer>
        <section>
            <Logo fillColor="#FFFFFF" />
            <nav>
                <ul>
                    <li className="navItem">
                        <NavLink exact to="/" aria-current="page">Home</NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink to="/projects" aria-current="page">Portfolio</NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink to="/contact-me" aria-current="page">Contact Me</NavLink>
                    </li>
                </ul>
            </nav>
        </section>
        <SocialIcons fillColor="#FFFFFF" />
    </footer>
)