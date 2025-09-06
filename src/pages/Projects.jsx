import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import WorkCard from "../components/WorkCard";
import streamZoneImage from "../assets/streamzone.png";
import jobPilotImage from "../assets/jobpilot2.png";
import tweetGeneratorImage from "../assets/tweet.png";

function Projects() {
  const projects = [
    {
      title: "StreamZone",
      description:
        "StreamZone is an innovative full-stack platform that empowers users to effortlessly upload, stream, and enjoy videos with seamless, engaging experiences.",
      img: streamZoneImage,

      technologies: "React, Node.js, Express, MongoDB, Tailwind CSS",
      githubUrl: "https://github.com/Mahi6384/StreamZone",
      // liveLink: "https://github.com/Mahi6384/StreamZone",
    },
    {
      img: jobPilotImage,
      title: "JobPilot (still in progress)",
      description:
        "An AI-powered assistant that selects best-fit jobs, automates applications, crafts tailored answers, and helps you accelerates your professional success effortlessly.",
      technologies:
        "Playwright, Gen Ai, React, Node.js, Express, MongoDB, Tailwind CSS",
      githubUrl: " https://github.com/Mahi6384/JobPilot",
      // liveLink: "https://github.com/Mahi6384/JobPilot",
    },
    {
      title: "Tweet-Generator",
      description:
        "An AI assistant that creates diverse tweet versions on one theme, instantly shifting tone to match any emotion you choose",
      img: tweetGeneratorImage,
      technologies: " Hugging Face API, React.js, CSS",
      githubUrl: "https://github.com/Mahi6384/tweetGenerator",
      // liveLink: "https://github.com/Mahi6384/tweetGenerator",
    },

    // {
    //   title: "Book-Store",
    //   description: "A streaming platform for movies and TV shows.",
    //   imageUrl: "https://picsum.photos/seed/portfolio-1/800/500",
    //   projectUrl: "https://github.com/Mahi6384/book-store",
    // },
  ];
  return (
    <div>
      <section id="projects" className="py-14 md:py-20">
        <Container>
          <SectionTitle kicker="PORTFOLIO" title="Selected Projects" />
          <div className="grid gap-6 md:grid-cols-2 tracking-wide lg:grid-cols-3">
            {projects.map((project, i) => (
              <WorkCard
                key={i}
                img={project.img}
                title={project.title}
                description={project.description}
                href={project.projectUrl}
                techStacks={project.technologies}
                githubUrl={project.githubUrl}
                liveLink={project.liveLink}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Projects;
