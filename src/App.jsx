export default function App() {
    const services = [
        {
            title: "Signature Websites",
            description:
                "Luxury-feeling websites for businesses that want to look polished, trusted, and established.",
        },
        {
            title: "Custom Web Apps",
            description:
                "Interactive platforms, portals, dashboards, and tools built around your workflow and goals.",
        },
        {
            title: "Ongoing Support",
            description:
                "Refinements, updates, and improvements so your digital presence keeps getting stronger over time.",
        },
    ];

    const packages = [
        {
            name: "Starter",
            price: "$750+",
            description: "For businesses that need a clean, professional presence online.",
            features: [
                "1–3 page website",
                "Mobile-friendly design",
                "Contact form setup",
                "Basic SEO structure",
            ],
        },
        {
            name: "Growth",
            price: "$1,500+",
            description: "For brands ready for a stronger online presence and more polished experience.",
            features: [
                "Up to 6 pages",
                "Custom branded layout",
                "Inquiry or booking flow",
                "Copy/content guidance",
            ],
            featured: true,
        },
        {
            name: "Custom",
            price: "Let’s Talk",
            description: "For web apps, portals, dashboards, and more advanced client needs.",
            features: [
                "Custom functionality",
                "Scalable structure",
                "Strategy-based build",
                "Ongoing support options",
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <div className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(212,175,55,0.10),_transparent_22%)]' />

            <div className="max-w-7xl mx-auto px-6 py-10">
                <header className="flex items-center justify-between border-b border-white/10 pb-6">
                    <div>
                        <p className="text-2xl font-semibold tracking-wide">OakTech Solutions</p>
                        <p className="text-sm text-white/50">Websites & Web Apps</p>
                    </div>
                    <a
                        href="#contact"
                        className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white hover:bg-white/10 transition"
                    >
                        Book a Consultation
                    </a>
                </header>

                <section className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">
                            Premium Digital Presence
                        </p>
                        <h1 className="mt-5 text-5xl font-bold leading-tight md:text-7xl">
                            High-end websites and custom apps for businesses that want to stand out.
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                            I help businesses launch polished, modern websites and custom digital experiences
                            that feel premium, build trust, and turn attention into real inquiries.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#pricing"
                                className="rounded-full bg-white px-7 py-3 text-center font-semibold text-black transition hover:scale-[1.02]"
                            >
                                View Pricing
                            </a>
                            <a
                                href="#contact"
                                className="rounded-full border border-white/20 px-7 py-3 text-center font-semibold text-white transition hover:bg-white/10"
                            >
                                Start Your Project
                            </a>
                        </div>

                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-2xl font-semibold">Clean</p>
                                <p className="mt-1 text-sm text-white/55">Modern visuals that feel elevated</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-2xl font-semibold">Custom</p>
                                <p className="mt-1 text-sm text-white/55">Built around your business goals</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                                <p className="text-2xl font-semibold">Trusted</p>
                                <p className="mt-1 text-sm text-white/55">Designed to help clients take you seriously</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-200/20 via-white/10 to-transparent blur-2xl" />
                            <img
                                src="/profile.jpg"
                                alt="Founder of OakTech Solutions"
                                className="relative h-[430px] w-[340px] rounded-[2rem] border border-white/10 object-cover shadow-2xl"
                            />
                        </div>
                    </div>
                </section>

                <section className="py-12">
                    <div className="max-w-2xl">
                        <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">Services</p>
                        <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                            Built for brands that want more than a basic site.
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 shadow-xl backdrop-blur"
                            >
                                <h3 className="text-2xl font-semibold">{service.title}</h3>
                                <p className="mt-4 leading-7 text-white/65">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="pricing" className="py-20">
                    <div className="text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">Pricing</p>
                        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
                            Clear packages for serious businesses
                        </h2>
                        <p className="mt-4 text-white/65 max-w-2xl mx-auto">
                            Pricing starts here, but every project can be shaped around your exact needs, goals,
                            and timeline.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-6 lg:grid-cols-3">
                        {packages.map((pkg) => (
                            <div
                                key={pkg.name}
                                className={`rounded-[2rem] border p-8 ${
                                    pkg.featured
                                        ? "border-amber-300/40 bg-white text-black shadow-2xl"
                                        : "border-white/10 bg-white/[0.04] text-white"
                                }`}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-2xl font-semibold">{pkg.name}</h3>
                                    {pkg.featured && (
                                        <span className="rounded-full bg-black/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                      Most Popular
                    </span>
                                    )}
                                </div>
                                <p className="mt-6 text-4xl font-bold">{pkg.price}</p>
                                <p className={`mt-4 leading-7 ${pkg.featured ? "text-black/70" : "text-white/65"}`}>
                                    {pkg.description}
                                </p>

                                <div className="mt-8 space-y-3">
                                    {pkg.features.map((feature) => (
                                        <div key={feature} className="flex items-start gap-3">
                      <span
                          className={`mt-1 h-2.5 w-2.5 rounded-full ${
                              pkg.featured ? "bg-black" : "bg-amber-300"
                          }`}
                      />
                                            <p className={pkg.featured ? "text-black/80" : "text-white/75"}>{feature}</p>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="#contact"
                                    className={`mt-8 inline-block w-full rounded-full px-6 py-3 text-center font-semibold transition ${
                                        pkg.featured
                                            ? "bg-black text-white hover:bg-black/85"
                                            : "border border-white/15 hover:bg-white/10"
                                    }`}
                                >
                                    Inquire Now
                                </a>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="py-8 pb-20">
                    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                            <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">
                                Work With OakTech
                            </p>
                            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                                Let’s build something that makes your business look next level.
                            </h2>
                            <p className="mt-5 max-w-2xl leading-8 text-white/65">
                                Whether you need a premium website, a client-facing portal, or a custom app idea
                                brought to life, we can build around your vision.
                            </p>
                            <div className="mt-8 space-y-3 text-white/70">
                                <p>Email: oaktechbuilds@gmail.com</p>
                                <p>Best for: businesses, creators, events, and growing brands</p>
                            </div>
                        </div>

                        <div className="rounded-[2rem] border border-white/10 bg-black/60 p-8 shadow-2xl">
                            <h3 className="text-2xl font-semibold">Start a Project</h3>
                            <form
                                action="https://formspree.io/f/xpqkojpq"
                                method="POST"
                                className="mt-6 space-y-4"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/35 focus:border-amber-300/40"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/35 focus:border-amber-300/40"
                                />

                                <textarea
                                    name="message"
                                    placeholder="Tell me what you want to build"
                                    rows="5"
                                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/35 focus:border-amber-300/40"
                                />

                                <button
                                    type="submit"
                                    className="w-full rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:scale-[1.01]"
                                >
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}