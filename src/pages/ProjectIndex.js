//layout component
import { Layout } from '../components/LayoutComponent';
//import components
import { ProjectsMainIndex } from '../components/Projects--Index';

export const ProjectIndex = () => (
    <Layout pageMeta={{
        title: 'Projects'
    }}>
        <ProjectsMainIndex />
    </Layout>
)
