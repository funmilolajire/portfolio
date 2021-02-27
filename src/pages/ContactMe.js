import { Header } from '../components/Header';
import { GetInTouch } from '../components/ContactMe--GiT';
import { ContactForm } from '../components/ContactMe--Form';
import { Footer } from '../components/Footer';

export const ContactMe = () => {
    return (
        <div className="ContactMe">
            <Header />
            <GetInTouch />
            <ContactForm />
            <Footer />
        </div>
    )
}