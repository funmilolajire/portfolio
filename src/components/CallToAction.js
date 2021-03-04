import { Link, useLocation } from 'react-router-dom';

export const CTA = () => {
    const location = useLocation();
    return (
        <>
            {
                location.pathname !== "/contact-me" &&
                <section data-scroll className="flex items-center justify-between space-x-8 CTA py-36">
                    <h3 className="pr-6 text-4xl font-bold w-96" style={{ letterSpacing: "-0.357143px" }}>
                        Interested in doing a project together?
                   </h3>
                    <div className="w-7/12 h-px mt-4 border-t bg-gdb bg-opacity-20"></div>
                    <Link to="/contact-me"><button style={{ letterSpacing: "2px" }} className="w-40 h-12 text-xs font-bold uppercase transition-all duration-500 ease-in border focus:outline-none focus:ring-1 focus:ring-gdb transform-gpu hover:bg-gdb hover:text-white border-opacity-80 border-gdb cta">
                        Contact Me
            </button></Link>
                </section>
            }
        </>
    )
}