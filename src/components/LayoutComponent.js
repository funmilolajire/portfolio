import { Helmet } from 'react-helmet';
import { Header } from './Header';
import { CTA } from './CallToAction';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';

export const Layout = ({ pageMeta, children }) => (
    <>
        <Helmet>
            <html lang="en" />
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Funmilola Olajire" />
            <meta name="description"
                content={`Hi, I'm Funmilola Olajire, a frontend (reactjs) developer from Nigeria. Welcome to my ${pageMeta.title.toLowerCase()} page.`} />
            {/* <meta name="keywords" content={pageMeta.keywords.join(',')} /> */}
            <title>{pageMeta.title} | Funmilola O. - Developer</title>
        </Helmet>
        <ScrollToTop />
        <Header />
        <main data-scroll-section>
            {children}
        </main>
        <CTA />
        <Footer />
    </>
)