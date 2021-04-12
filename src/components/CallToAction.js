import { Link, useLocation } from 'react-router-dom';

export const CTA = () => {
    const location = useLocation();
    return (
        <>
            {
                location.pathname !== "/contact-me" &&
                <section data-scroll className="CTA">
                    <h3>
                        Interested in doing a project together?
                   </h3>
                    <div className="cta-divider"></div>
                    <Link to="/contact-me">
                        <button>
                            Contact Me
                        </button>
                    </Link>
                </section>
            }
        </>
    )
}