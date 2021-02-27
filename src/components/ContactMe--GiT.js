import { SocialIcons } from './SocialIcons';

export const GetInTouch = () => {
    return (
        <div style={{ borderColor: "#33323D" }} className="flex justify-between py-12 border-t border-opacity-10 GetInTouch">
            <h2 className="text-5xl font-bold">Get In Touch</h2>
            <section className="w-7/12">
                <p className="pb-6 text-base opacity-80">
                    I’d love to hear about what you’re working on and how I could help. I’m currently
                    looking for a new role and am open to a wide range of opportunities. My preference
                    would be to find a position in a company in London. But I’m also happy to hear about
                    opportunities that don’t fit that description. I’m a hard-working and positive person
                    who will always approach each task with a sense of purpose and attention to detail.
                    Please do feel free to check out my online profiles below and get in touch using the form.
                </p>
                <SocialIcons fillColor="#33323D" />
            </section>
        </div>
    )
}