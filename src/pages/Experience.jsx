import React from "react";
import Container from "../components/Container.jsx";
import SectionTitle from "../components/SectionTitle.jsx";

function Experience() {
  return (
    <section className="relative" id="experience">
      <Container className="py-14 md:py-20">
        {/* Section Header */}
        <SectionTitle kicker="EXPERIENCE" title="Where I've Worked" />

        {/* Experience Card - Full Stack Developer */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white">
            Full Stack Developer
            <span className="text-sm text-white/60 font-normal">
              {" "}
              | Qureal AI
            </span>
          </h2>
          <p className="text-sm text-white/60 mt-1">
            Feb 2025 - Present
          </p>
          <p className="text-sm text-white/60 mt-1">
            Tech Stack: React.js, Next.js, TypeScript, Tailwind CSS
          </p>
        </div>

        {/* Timeline - Full Stack Developer */}
        <div className="relative mt-10">
          <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-sky-500/10 to-transparent blur-2xl" />
          <ul className="relative border-l border-gray-300 ml-6">
            <li className="mb-6 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
                ●
              </span>
              Developed and deployed production-ready features using React.js, Next.js, TypeScript, and Tailwind CSS across frontend and backend systems.
            </li>

            <li className="mb-6 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
                ●
              </span>
              Integrated Razorpay payment workflows for subscriptions and orders, increasing payment success rates by 15% and handling seamless checkouts for 500 users.
            </li>

            <li className="mb-6 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
                ●
              </span>
              Built an AI persona generator enabling users to customize attributes like gender, age, and appearance for dynamic image generation.
            </li>

            <li className="mb-6 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
                ●
              </span>
              Implemented client-side image enhancement tools (brightness, cropping, etc.), reducing backend server load by 30% and decreasing user wait times by 2 seconds per image.
            </li>

            <li className="mb-6 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
                ●
              </span>
              Designed a library of 15+ reusable UI components, accelerating frontend development cycles by an estimated 20% and improving platform consistency.
            </li>

            <li className="mb-6 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
                ●
              </span>
              Collaborated with backend APIs for dynamic data management and smooth feature delivery.
            </li>

            <li className="mb-6 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
                ●
              </span>
              Mentored 3 engineering interns through implementation support and code reviews to maintain code quality standards.
            </li>
          </ul>
        </div>

        {/* Experience Card - Frontend Developer Intern */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-white">
            Frontend Developer Intern
            <span className="text-sm text-white/60 font-normal">
              {" "}
              | YouEkko Communication
            </span>
          </h2>
          <p className="text-sm text-white/60 mt-1">
            Apr 2023 - Jun 2023
          </p>
          <p className="text-sm text-white/60 mt-1">
            Tech Stack: Next.js, Tailwind CSS
          </p>
        </div>

        {/* Timeline - Frontend Developer Intern */}
        <div className="relative mt-10">
          <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-tr from-fuchsia-500/10 via-sky-500/10 to-transparent blur-2xl" />
          <ul className="relative border-l border-gray-300 ml-6">
            <li className="mb-6 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
                ●
              </span>
              Built responsive and SEO-friendly web pages using Next.js and Tailwind CSS, achieving a Lighthouse performance score of 85+.
            </li>

            <li className="mb-6 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
                ●
              </span>
              Implemented secure authentication flows and form validations integrated with backend services.
            </li>

            <li className="mb-6 ml-6">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-white">
                ●
              </span>
              Added export functionality for PDF, PNG, and SVG formats for user-generated assets.
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
