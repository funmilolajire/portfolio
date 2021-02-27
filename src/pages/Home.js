import { Header } from '../components/Header';
import { CTA } from '../components/CallToAction';
import { Footer } from '../components/Footer';

export const Home = () => {
    return (
        <div className="Home">
            <Header />
            <CTA />
            <Footer />
        </div>
    )
}