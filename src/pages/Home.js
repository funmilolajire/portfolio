import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Home--Hero';
import { About } from '../components/Home--About';
import { SkillSet } from '../components/Home--SkillSet';

//layout component
import { Layout } from '../components/LayoutComponent';

export const Home = () => {
    const location = useLocation();
    const aboutMeRef = useRef();

    useEffect(() => {
        if (location.pathname === "/#about-me") {
            aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })
        } else if (location.pathname === "/") {
            window.scrollTo({
                top: 0,
                bottom: -window.innerHeight,
                behavior: 'smooth'
            })
        }
    })
    return (
        <>
            <Layout pageMeta={{
                title: 'Home'
            }}>
                <Hero />
                <About aboutMeRef={aboutMeRef} />
                <SkillSet />
            </Layout>
        </>
    )
}