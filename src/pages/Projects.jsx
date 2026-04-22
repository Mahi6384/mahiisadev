import React from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import WorkCard from "../components/WorkCard";

function Projects() {
  const projects = [
    {
      title: "JobPilot",
      description: [
        "Built an automated job application platform using Playwright, React.js, Node.js, and MongoDB to streamline multi-platform applications.",
        "Developed a browser extension for one-click application submissions based on user-selected jobs.",
        "Implemented automated workflows for form filling and job submissions using Playwright.",
        "Maintained an updated job database with scheduled syncing for faster job discovery.",
      ],
      technologies: "Playwright, Gen AI, React, Node.js, Express, MongoDB",
      githubUrl: "https://github.com/Mahi6384/JobPilot",
      liveLink: "https://jobpilot-wheat.vercel.app/",
    },
    {
      title: "InsightHire",
      description: [
        "Developed a community-driven interview preparation platform for sharing company-wise interview experiences.",
        "Built role-based features for public sharing and private interview performance tracking.",
        "Integrated Cloudinary and Multer for efficient image and video upload management.",
        "Created feedback and discussion mechanisms to improve community engagement and content quality.",
      ],
      technologies: "React, Node.js, Express, MongoDB, Tailwind CSS",
      githubUrl: "https://github.com/Mahi6384/InsightHire",
      liveLink: "https://insight-hire-ten.vercel.app/",
    },
    {
      title: "Tweet Generator",
      description: [
        "Built an AI-powered tweet generator using React.js and Hugging Face Inference API for context-aware content generation.",
        "Developed a lightweight frontend-only architecture for real-time text generation without backend dependencies.",
      ],
      technologies: "Hugging Face API, React.js, CSS",
      githubUrl: "https://github.com/Mahi6384/tweetGenerator",
    },
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
                title={project.title}
                description={project.description}
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
