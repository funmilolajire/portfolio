import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import { Logo } from './Logo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false)


    const handleMenuOpen = () => {
        setMobileMenu(prev => !prev)
    }

    const location = useLocation();

    const HeaderClasses = location.pathname === "/"
        ? "flex justify-between items-center sm:pb-8 sm:pt-8 sm:max-h-full md:h-28 h-32 pt-14 pb-16 Header"
        : "flex justify-between items-center sm:pb-9 sm:pt-8 sm:max-h-full md:h-32 h-36 pt-14 pb-20 Header"

    return (
        <header className={HeaderClasses}>
            <Logo fillColor="#33323D" />
            <span onClick={handleMenuOpen} className="menuIcon">
                {!mobileMenu
                    ? <IoMenuOutline data-menu className="menu text-3xl cursor-pointer" />
                    : <IoCloseOutline data-menu-close className="close text-3xl cursor-pointer" />
                }
            </span>

            <nav className={mobileMenu ? "" : "sm:hidden"}>
                <ul>
                    <li className="navItem">
                        <NavLink exact to="/" aria-current="page" activeStyle={{ color: '#5fb4a2' }}>Home</NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink to="/projects" aria-current="page" activeStyle={{ color: '#5fb4a2' }}>Projects</NavLink>
                    </li>
                    <li className="navItem">
                        <NavLink to="/contact-me" aria-current="page" activeStyle={{ color: '#5fb4a2' }}>Contact Me</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}