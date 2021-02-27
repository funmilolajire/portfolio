import { NavLink } from 'react-router-dom';
import { SocialIcons } from './SocialIcons';
import { Logo } from './Logo';

export const Footer = () => {
    return (
        <footer className="flex items-center justify-between px-40 py-6 -mx-40" style={{ backgroundColor: "#33323D" }}>
            <section className="flex items-center">
                <Logo fillColor="#FFFFFF" />
                <nav style={{ letterSpacing: "2px" }} className="text-xs font-bold text-white uppercase">
                    <ul className="flex pl-12">
                        <li className="pr-10 navItem">
                            <NavLink exact to="/" aria-current="page">Home</NavLink>
                        </li>
                        <li className="px-10 navItem">
                            <NavLink to="/portfolio" aria-current="page">Portfolio</NavLink>
                        </li>
                        <li className="pl-10 navItem">
                            <NavLink to="/contact-me" aria-current="page">Contact Me</NavLink>
                        </li>
                    </ul>
                </nav>
            </section>
            <SocialIcons fillColor="#FFFFFF" />
        </footer>
    )
}