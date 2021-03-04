import { GetInTouch } from '../components/ContactMe--GiT';
import { ContactForm } from '../components/ContactMe--Form';

//layout component
import { Layout } from '../components/LayoutComponent';

export const ContactMe = () => (
    <Layout pageMeta={{
        title: 'Contact Me'
    }}>
        <GetInTouch />
        <ContactForm />
    </Layout>
)