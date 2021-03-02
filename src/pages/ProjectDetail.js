import { Layout } from '../components/LayoutComponent';
import { useParams } from 'react-router-dom';

export const ProjectDetail = () => {
    const { project } = useParams();
    const capitalizeTitle = title => title.split("-")
        .map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");

    return (
        <>
            <Layout pageMeta={{
                title: `${capitalizeTitle(project)}`
            }}>

            </Layout>
        </>
    )
}
