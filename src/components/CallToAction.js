import { Link } from 'react-router-dom';

export const CTA = () => {
    return (
        <div className="flex items-center justify-between space-x-8 CTA py-36">
            <h3 className="text-4xl font-bold w-80" style={{ letterSpacing: "-0.357143px" }}>
                Interested in doing a project together?
            </h3>
            <div style={{ backgroundColor: "33323D" }} className="w-7/12 h-px mt-4 border-t"></div>
            <button style={{ borderColor: "#33323D", letterSpacing: "2px" }} className="w-40 h-12 text-xs font-bold uppercase border cta">
                <Link to="/contact-me">Contact Me</Link>
            </button>
        </div>
    )
}