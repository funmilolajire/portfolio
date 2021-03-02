import { useEffect } from 'react';
import { GetInTouch } from '../components/ContactMe--GiT';
import { ContactForm } from '../components/ContactMe--Form';

//layout component
import { Layout } from '../components/LayoutComponent';

export const ContactMe = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            bottom: -window.innerHeight,
            behavior: 'smooth'
        })
    })
    return (
        <>
            <Layout pageMeta={{
                title: 'Contact Me'
            }}>
                <GetInTouch />
                <ContactForm />
            </Layout>
        </>
    )
}