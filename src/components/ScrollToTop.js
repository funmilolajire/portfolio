import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            bottom: -window.innerHeight,
            behavior: 'smooth'
        })
    }, [pathname]);

    return null;
}