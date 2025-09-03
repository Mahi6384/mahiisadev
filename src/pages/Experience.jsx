import React from "react";
import Container from "../components/Container.jsx";
import GradientText from "../components/GradientText.jsx";
// import SectionTitle from "../components/SectionTitle.jsx";
// import Card from "../components/Card.jsx";
// import Icon, { icons } from "../components/Icon.jsx";
function Experience() {
  return (
    <section className="relative">
      <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
            <GradientText>Experience</GradientText>
            {/* <br /> */}
          </h1>
          <br />
          <h1 className="text-lg">
            Front-End Developer Intern | You Ekko Communication{" "}
          </h1>
          <p className="text-md text-white/70">
            {" "}
            Tech Stack: React.js, Next.js, SEO, Tailwind CSS, HTML
          </p>
        </div>
        <div className="relative">
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
