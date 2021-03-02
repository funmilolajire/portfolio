export const Hero = () => {
    return (
        <div className="relative Home--Hero">
            <picture className="w-full Hero--Image">
                <source media="(min-width: 880px)"
                    srcset="/images/homepage/desktop/image-homepage-hero.jpg,
                /images/homepage/desktop/image-homepage-hero@2x.jpg 2x" />
                <source media="(min-width: 400px)"
                    srcset="/images/homepage/tablet/image-homepage-hero.jpg,
                /images/homepage/tablet/image-homepage-hero@2x.jpg 2x" />
                <img loading="lazy" className="w-full" alt="home-hero" srcset="/images/homepage/mobile/image-homepage-hero.jpg,
                /images/homepage/mobile/image-homepage-hero@2x.jpg 2x"/>
            </picture>
            <section className="absolute bottom-0 left-0 w-5/12 bg-gray-50 Hero--TextContent">
                <h1 className="py-12 pr-5 text-5xl font-bold">Hey, I'm <span className="text-transparent bg-gradient-to-r bg-clip-text from-name1 to-name2 ">Funmilola.</span> A frontend developer.</h1>
                <div style={{ letterSpacing: "2px" }} className="flex items-center w-48 h-12 text-center uppercase duration-700 ease-in-out cursor-default focus:outline-none focus:ring-1 focus:ring-sdc hover:text-white text-sdc hover:bg-sdc bg-db">
                    <a data-scroll href="#about-me" className="flex items-center justify-center w-12 h-12 bg-black bg-opacity-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                            <g fill="none" fill-rule="evenodd" className="stroke-current">
                                <path d="M0 9l8 4 8-4" />
                                <path opacity=".5" d="M0 5l8 4 8-4" />
                                <path opacity=".25" d="M0 1l8 4 8-4" />
                            </g>
                        </svg>
                    </a>
                    <p className="justify-center w-9/12 text-white">
                        About Me
                    </p>
                </div>
            </section>
        </div>
    )
}