export const Hero = () => (
    <div className="Home--Hero">
        <picture className="Hero--Image">
            <source media="(min-width: 880px)"
                srcset="/images/homepage/desktop/image-homepage-hero.jpg,
                /images/homepage/desktop/image-homepage-hero@2x.jpg 2x" />
            <source media="(min-width: 590px)"
                srcset="/images/homepage/tablet/image-homepage-hero.jpg,
                /images/homepage/tablet/image-homepage-hero@2x.jpg 2x" />
            <img loading="lazy" alt="home-hero" srcset="/images/homepage/mobile/image-homepage-hero.jpg,
                /images/homepage/mobile/image-homepage-hero@2x.jpg 2x"/>
        </picture>
        <section className="Hero--TextContent">
            <h1>Hey, I'm <span>Funmilola.</span> A frontend developer.</h1>
            <div>
                <a data-scroll href="#about-me">
                    <span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M0 9l8 4 8-4" />
                                <path opacity=".5" d="M0 5l8 4 8-4" />
                                <path opacity=".25" d="M0 1l8 4 8-4" />
                            </g>
                        </svg>
                    </span>

                    <span>
                        About Me
                </span>
                </a>
            </div>
        </section>
    </div>
)