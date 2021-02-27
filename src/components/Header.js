import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export const Header = () => {
    const location = useLocation();

    const HeaderClasses = location.pathname === "/"
        ? "flex justify-between pt-16 pb-14 Header"
        : "flex justify-between pt-16 pb-20 Header"

    return (
        <header className={HeaderClasses}>
            <Logo fillColor="#33323D" />
            <nav style={{ letterSpacing: "2px" }} className="text-xs font-bold uppercase">
                <ul className="flex">
                    <li className="px-10 navItem">
                        <NavLink exact to="/" aria-current="page" activeStyle={{ color: '#5fb4a2' }}>Home</NavLink>
                    </li>
                    <li className="px-10 navItem">
                        <NavLink to="/portfolio" aria-current="page" activeStyle={{ color: '#5fb4a2' }}>Portfolio</NavLink>
                    </li>
                    <li className="pl-10 navItem">
                        <NavLink to="/contact-me" aria-current="page" activeStyle={{ color: '#5fb4a2' }}>Contact Me</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}