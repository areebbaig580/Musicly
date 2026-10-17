const projects = [
    { name: "Portfolio", href: "https://portfolio-areeb-baig.vercel.app/" },
    { name: "Movie Hub", href: "https://movies-hub-vert-xi.vercel.app/" },
    { name: "Pomoductivity Pro", href: "https://pomoductivity-pro.vercel.app/" },
    { name: "Habitly", href: "https://habitly-areeb-baig.vercel.app/" },
];

const contacts = [
    {
        label: "6396892198",
        href: "tel:+916396892198",
        d: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z",
    },
    {
        label: "areebbaig580@gmail.com",
        href: "mailto:areebbaig580@gmail.com",
        d: "M3 6h18v12H3V6Zm0 0 9 7 9-7",
    },
    {
        label: "areebbaig580",
        href: "https://github.com/areebbaig580",
        external: true,
        d: "M9 19c-4 1.5-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21",
    },
    {
        label: "LinkedIn",
        href: "",
        external: true,
        d: "M4 9h4v11H4V9Zm2-5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm5 5h4v1.5c.6-1 1.8-1.8 3.5-1.8 3 0 3.5 2 3.5 4.5V20h-4v-5.5c0-1.2 0-2.5-1.5-2.5S15 13.2 15 14.5V20h-4V9Z",
    },
];

const link =
    "text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1ed760]";

const heading = "mb-5 text-sm font-semibold uppercase tracking-wide text-white";

export default function Footer() {
    return (
        <div className="mt-2 border-t border-neutral-800 bg-[#1b1b1b] text-slate-400 rounded-lg">
            <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

                    <section aria-labelledby="ft-about">
                        <h3 id="ft-about" className="mb-4 text-xl font-semibold text-white">Musicly</h3>
                        <p className="max-w-[36ch] leading-relaxed">
                            A music player built with React. Search songs, browse albums, and keep
                            playback going while you move between pages.
                        </p>
                    </section>


                    <nav aria-labelledby="ft-projects">
                        <h3 id="ft-projects" className={heading}>My other projects</h3>
                        <ul className="space-y-4">
                            {projects.map((p) => (
                                <li key={p.name}>
                                    <a href={p.href} target="_blank" rel="noopener noreferrer" className={link}>
                                        {p.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>


                    <section aria-labelledby="ft-contact">
                        <h3 id="ft-contact" className={heading}>Contact</h3>
                        <ul className="space-y-4">
                            {contacts.map((c) => (
                                <li key={c.label}>
                                    <a
                                        href={c.href}
                                        {...(c.external && { target: "_blank", rel: "noopener noreferrer" })}
                                        className={`${link} inline-flex items-center gap-3 break-all`}
                                    >
                                        <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none" aria-hidden="true">
                                            <path d={c.d} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {c.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-neutral-800 py-6 text-sm text-slate-500 sm:flex-row">
                    <p>© {new Date().getFullYear()} Musicly. All rights reserved.</p>

                </div>
            </div>
        </div>
    );
}