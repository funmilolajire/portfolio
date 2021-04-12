import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTopOnLoad = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            bottom: -window.innerHeight,
            behavior: 'smooth'
        })
    }, [pathname]);

    return null;
}