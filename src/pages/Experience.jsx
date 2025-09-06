import React from "react";
import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

function Experience() {
  return (
    <section className="relative">
      <Container className="py-14 md:py-20">
        {/* Section Header */}
        <SectionTitle kicker="EXPERIENCE" title="Where I've Worked" />

        {/* Experience Card */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white">
            Front-End Developer Intern
            <span className="text-sm text-white/60 font-normal">
              {" "}
              | You Ekko Communication
            </span>
          </h2>
          <p className="text-sm text-white/60 mt-1">
            Tech Stack: React.js, Next.js, SEO, Tailwind CSS, HTML
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-10">
          <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-sky-500/10 to-transparent blur-2xl" />
          <ul className="relative border-l border-gray-300 ml-6">
            <li className="mb-6 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
                ●
              </span>
              Built an interactive, data-driven dashboard to monitor user
              traffic using pie, bar, donut, and line charts.
            </li>

            <li className="mb-6 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
                ●
              </span>
              Designed and deployed dynamic business card generation based on
              user profiles.
            </li>

            <li className="mb-6 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
                ●
              </span>
              Implemented user authentication pages including Login and Forgot
              Password.
            </li>

            <li className="mb-6 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
                ●
              </span>
              Developed core pages for Ekko.network (Return Policy, Terms &
              Conditions, Privacy Policy, Contact Us, Landing Page).
            </li>

            <li className="mb-6 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
                ●
              </span>
              Optimized the website for search engines, significantly improving
              visibility and reach.
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
