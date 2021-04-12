import { Hero } from '../components/Home--Hero';
import { About } from '../components/Home--About';
import { SkillSet } from '../components/Home--SkillSet';

//layout component
import { Layout } from '../components/LayoutComponent';

export const Home = () => (
    <Layout pageMeta={{
        title: 'Home'
    }}>
        <Hero />
        <About />
        <SkillSet />
    </Layout>
)