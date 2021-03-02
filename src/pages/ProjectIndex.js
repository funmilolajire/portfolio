import { useEffect } from 'react';

//layout component
import { Layout } from '../components/LayoutComponent';

export const ProjectIndex = () => {
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
                title: 'Project'
            }}>

            </Layout>
        </>
    )
}