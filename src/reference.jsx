import React from "react";

// —— Helper tiny components ——
const Container = ({ children, className = "" }) => (
  <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>
);

const GradientText = ({ children }) => (
  <span className="bg-gradient-to-r from-fuchsia-400 via-pink-400 to-sky-400 bg-clip-text text-transparent">
    {children}
  </span>
);

const NeonButton = ({ children, className = "", ...props }) => (
  <button
    className={`relative rounded-2xl px-6 py-3 font-medium text-white transition hover:scale-[1.02] ${className}`}
    {...props}
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 opacity-90" />
    <span className="absolute -inset-1 rounded-3xl blur-lg bg-gradient-to-r from-sky-500 via-fuchsia-500 to-pink-500 opacity-50" />
  </button>
);

const Card = ({ children, className = "" }) => (
  <div
    className={`relative rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur ${className}`}
  >
    {children}
  </div>
);

const SectionTitle = ({ kicker, title }) => (
  <div className="mb-8">
    <p className="text-sm tracking-[0.25em] text-fuchsia-300">{kicker}</p>
    <h2 className="mt-2 text-3xl font-semibold text-white">
      <GradientText>{title}</GradientText>
    </h2>
  </div>
);

// —— Background Decoration (grid + radial glow) ——
const Bg = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
    {/* radial gradient */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.12),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(56,189,248,0.12),transparent_40%)]" />
    {/* subtle grid */}
    <svg
      className="absolute inset-0 h-full w-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path
            d="M 32 0 L 0 0 0 32"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

// —— Icon (simple inline svg to avoid extra deps) ——
const Icon = ({ path, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className={`h-5 w-5 ${className}`}
  >
    <path d={path} />
  </svg>
);

const icons = {
  monitor: "M3 4h18v10H3z M7 20h10M9 16h6",
  pen: "M12 20l-7 1 1-7L15 5l4 4-8 8zm0 0l4 4",
  wp: "M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0zm5.2 6l2.1-5.8L9 9m6.1 9l-3.2-9",
  external: "M14 3h7v7M10 14L21 3 M21 10v11H3V3h11",
};

// —— Portfolio Card ——
const WorkCard = ({ img, title, href }) => (
  <Card className="group overflow-hidden p-0">
    <div className="aspect-[16/10] w-full bg-white/5">
      {img ? (
        <img src={img} alt="project" className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full items-center justify-center text-white/30">
          Screenshot
        </div>
      )}
    </div>
    <div className="p-5">
      <p className="text-center text-sm text-white/80">{title}</p>
    </div>
    <a
      href={href}
      className="absolute right-3 bottom-3 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs text-white/80 opacity-0 transition group-hover:opacity-100"
      target="_blank"
      rel="noreferrer"
    >
      Open
      <Icon path={icons.external} />
    </a>
  </Card>
);

export default function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-[#0c121a] text-slate-300 selection:bg-pink-500/30">
      <Bg />

      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-white/5 bg-[#0c121a]/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold tracking-wide text-white/90">
            MAHI JAIN
          </div>
          <nav className="hidden items-center gap-8 text-sm text-white/75 md:flex">
            {[
              ["Services", "#services"],
              ["Technologies", "#skills"],
              ["Portfolio", "#portfolio"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="hover:text-white">
                {label}
              </a>
            ))}
            <div className="rounded-lg border border-white/10 px-3 py-1">
              ENG 🌐
            </div>
          </nav>
        </Container>
      </header>

      {/* Hero */}
      <section className="relative">
        <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
              <GradientText>FRONTEND</GradientText>
              <br />
              <GradientText>DEVELOPER</GradientText>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">
              I am Mahi —{" "}
              <span className="underline decoration-sky-400/60">
                web‑developer
              </span>{" "}
              with a passion for creating beautiful and responsive websites.
            </p>
            <div className="mt-8">
              <NeonButton
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                VIEW MY WORK
              </NeonButton>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-sky-500/10 to-transparent blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop"
              alt="Portrait"
              className="mx-auto h-[460px] w-auto rounded-[28px] object-cover shadow-2xl md:h-[520px]"
            />
          </div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="py-14 md:py-20">
        <Container>
          <SectionTitle kicker="MY SERVICES" title="What I can do for you" />

          <div className="relative grid gap-6 md:grid-cols-2">
            <Card className="">
              <div className="flex items-start gap-4">
                <Icon path={icons.monitor} className="text-sky-300" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Website Development
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    I build responsive websites from your design (landing pages,
                    multi‑page sites) that look great and work smoothly on any
                    device.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-4">
                <Icon path={icons.pen} className="text-pink-300" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Web Design
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    From wireframe to final UI. Clean, modern and user‑friendly
                    designs aligned with your brand and goals.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="md:col-span-2">
              <div className="flex items-start gap-4">
                <Icon path={icons.wp} className="text-blue-300" />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    WordPress Development
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    Fast, editable WordPress sites for blogs, small businesses
                    and portfolios. Easy to update and manage.
                  </p>
                </div>
              </div>
            </Card>

            {/* connecting lines */}
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
              <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 90 C 300 90, 300 200, 580 200"
                  stroke="white"
                  strokeOpacity="0.1"
                  fill="none"
                />
                <path
                  d="M20 90 C 300 90, 300 340, 580 340"
                  stroke="white"
                  strokeOpacity="0.06"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section id="skills" className="py-14 md:py-20">
        <Container>
          <SectionTitle
            kicker="SKILLS"
            title="The skills, tools and technologies I use"
          />
          <div className="mx-auto grid max-w-3xl grid-cols-5 items-center justify-items-center gap-6 text-4xl md:text-5xl">
            <span title="HTML" className="[&>*]:drop-shadow">
              📄
            </span>
            <span title="CSS">🎨</span>
            <span title="JavaScript">🟨</span>
            <span title="Tailwind">🌊</span>
            <span title="Figma">🎛️</span>
            <span title="React">⚛️</span>
            <span title="Vite">⚡</span>
            <span title="Git">🧭</span>
            <span title="WordPress">🌀</span>
            <span title="Sass">💖</span>
          </div>
        </Container>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-14 md:py-20">
        <Container>
          <SectionTitle kicker="PORTFOLIO" title="Selected Projects" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <WorkCard
                key={i}
                img={`https://picsum.photos/seed/portfolio-${i}/800/500`}
                title={`Website Coding (HTML, CSS, JS)`}
                href="#"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/5 py-16">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              <GradientText>DO YOU HAVE A PROJECT TO DISCUSS?</GradientText>
            </h3>
            <p className="mt-4 text-white/80">Get in touch 💬</p>
            <div className="mt-6 space-y-3 text-white/80">
              <div>
                <p className="text-sm uppercase tracking-widest text-white/50">
                  Contact
                </p>
                <a
                  href="mailto:mahi@example.com"
                  className="text-sky-300 hover:underline"
                >
                  mahi@example.com
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-white/50">
                  Social Media
                </p>
                <div className="flex gap-3 text-white/70">
                  <a href="#" aria-label="LinkedIn">
                    in
                  </a>
                  <a href="#" aria-label="GitHub">
                    gh
                  </a>
                  <a href="#" aria-label="Instagram">
                    ig
                  </a>
                  <a href="#" aria-label="WhatsApp">
                    wa
                  </a>
                  <a href="#" aria-label="Telegram">
                    tg
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                placeholder="Name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0 placeholder:text-white/40 focus:border-sky-400/40"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0 placeholder:text-white/40 focus:border-sky-400/40"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none ring-0 placeholder:text-white/40 focus:border-sky-400/40"
              />
              <NeonButton className="w-full">SEND</NeonButton>
            </form>
          </Card>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} — All rights reserved, design & development
        — Mahi Jain
      </footer>
    </div>
  );
}
