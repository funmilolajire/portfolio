import { SocialIcons } from './SocialIcons';

export const GetInTouch = () => {
    return (
        <section className="flex justify-between py-12 border-t border-gdb border-opacity-10 ContactMe--GiT">
            <h2 className="text-5xl font-bold">Get In Touch</h2>
            <div className="w-7/12">
                <p className="pb-6 text-base opacity-80">
                    I’d love to hear about what you’re working on and how I could help. I’m currently
                    looking for a new role and am open to a wide range of opportunities. But I’m also happy to hear about other
                    opportunities that don’t fit that description.
                    If you have an offer, request or a question, do feel free to check out my online profiles below and get in touch using the form below.
                </p>
                <SocialIcons fillColor="#33323D" />
            </div>
        </section>
    )
}