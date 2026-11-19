import Header from "@/components/Header";
import { plexMono } from "@/lib/fonts";

export default function Build() {
    return (
        <>
            <Header />

            <main className={`px-8 sm:px-12 lg:px-16 pt-12 sm:pt-16 pb-24 ${plexMono.className}`}>
                <section className="max-w-5xl">

                    <h1 className="mb-6 text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-6xl">
                        Let's work<span className="text-gray-300">.</span>
                    </h1>

                    <div className="max-w-4xl">
                        <p className="text-base leading-8 text-gray-600 sm:text-lg">
                            If there's anything you want to explore, something you're working
                            on, or an idea you think is worth pursuing, please reach out.
                            I'm always open to good conversations and seeing where they lead.
                        </p>

                        <a
                            href="mailto:https://udeheberepurity@gmail.com"
                            className="mt-4 inline-block text-sm font-bold text-black underline underline-offset-4 hover:opacity-50"
                        >
                            Send me an email ↗
                        </a>
                    </div>

                    {/* INTERESTS */}
                    <section className="mt-16 max-w-4xl">
                        <h2 className="mb-7 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                            What I am interested in
                        </h2>

                        <ul className="list-disc space-y-5 pl-6 text-sm leading-7 text-gray-600 sm:text-base">
                            <li>
                                Consumer social products that find new ways for people to
                                communicate, connect and share information, especially where
                                technology makes a new kind of experience possible.
                            </li>

                            <li>
                                AI applications that take repetitive work off the hands of
                                people and teams, particularly work that takes hours to get
                                done manually.
                            </li>

                            <li>
                                Mobile utility products that solve familiar problems but do
                                it differently, with better functionality and a much better
                                user experience.
                            </li>

                            <li>
                                Cloud infrastructure, DevOps and the systems that make
                                products work reliably at scale.
                            </li>

                            <li>
                                Products at the intersection of machine learning, science
                                and technology.
                            </li>
                        </ul>
                    </section>

                    {/* WHY WORK WITH ME */}
                    <section className="mt-20 max-w-4xl">
                        <h2 className="mb-7 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                            Why you should work with me
                        </h2>

                        <ul className="list-disc space-y-5 pl-6 text-sm leading-7 text-gray-600 sm:text-base">
                            <li>
                                I enjoy bringing people together around ambitious ideas,
                                making big problems feel achievable and figuring out how
                                to move them forward.
                            </li>

                            <li>
                                I know I don't know everything. I'm comfortable admitting
                                what I'm bad at, asking questions and learning from people
                                who know more than I do.
                            </li>

                            <li>
                                I have the curiosity to explore, the confidence to try
                                and the commitment to see things through.
                            </li>

                            <li>
                                I'm optimistic, sometimes delusional, but I think a little
                                bit of that is necessary when trying to build something
                                that doesn't exist yet.
                            </li>
                        </ul>
                    </section>

                    {/* COLLABORATORS */}
                    <section className="mt-20 max-w-4xl">
                        <h2 className="mb-7 text-3xl font-bold tracking-tight text-black sm:text-4xl">
                            What qualities am I looking for?
                        </h2>

                        <ul className="list-disc space-y-5 pl-6 text-sm leading-7 text-gray-600 sm:text-base">
                            <li>
                                Intense urgency, skill and a strong sense of ownership.
                            </li>

                            <li>
                                Strong opinions, but enough curiosity to question them.
                            </li>

                            <li>
                                People who understand their craft, the problem they're
                                solving and the people they're solving it for.
                            </li>

                            <li>
                                People who can think independently, challenge ideas
                                and still work towards a shared goal.
                            </li>
                        </ul>
                    </section>

                    {/* CONTACT */}
                    <section className="mt-20 border-t border-gray-200 pt-8">
                        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                            Let's talk<span className="text-gray-300">.</span>
                        </h2>

                        <a
                            href="mailto:https://udeheberepurity@gmail.com"
                            className="mt-5 inline-block text-sm font-bold text-black underline underline-offset-4 hover:opacity-50"
                        >
                            Get in touch ↗
                        </a>
                    </section>

                </section>
            </main>
        </>
    );
}