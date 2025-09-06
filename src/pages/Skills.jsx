import React from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

import CIcon from "../assets/icons/c++.png";
import Html from "../assets/icons/html.png";
import Css from "../assets/icons/css.png";
import Javascript from "../assets/icons/javascript.png";
import Reactjs from "../assets/icons/reactjs.png";
import Nodejs from "../assets/icons/nodejs.png";
import Tailwindcss from "../assets/icons/tailwindcss.png";
import Git from "../assets/icons/git.png";
import Github from "../assets/icons/github.png";
import Figma from "../assets/icons/figma.png";
import VsCode from "../assets/icons/vscode.png";
import Express from "../assets/icons/express.png";

// 🔹 Group skills into categories
const skillCategories = [
  {
    title: "Development",
    skills: [
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
      { name: "JavaScript", icon: Javascript },
      { name: "React JS", icon: Reactjs },
      { name: "Node JS", icon: Nodejs },
      { name: "Express JS", icon: Express },
      { name: "Tailwind CSS", icon: Tailwindcss },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "VS Code", icon: VsCode },
      { name: "Figma", icon: Figma },
      { name: "Git", icon: Git },
      { name: "GitHub", icon: Github },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C++", icon: CIcon },
      { name: "JavaScript", icon: Javascript }, // also keep here if you want under Languages
    ],
  },
  // You can later add "Deployment" here with Netlify/Vercel/Docker etc.
];

function Skills() {
  return (
    <div>
      <section id="skills" className="py-14 md:py-20">
        <Container>
          <SectionTitle
            kicker="SKILLS"
            title="The Tools and Technologies I Use"
          />

          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h3 className="text-lg md:text-xl font-semibold text-fuchsia-300 mb-6">
                {category.title}
              </h3>
              <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center 
                      rounded-2xl p-6 bg-white/5 backdrop-blur-md 
                       border border-transparent
                      hover:border-fuchsia-200/35 hover:border 
                      hover:shadow-[0_0_25px_rgba(144,94,136,0.4)]
                      transition duration-300"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-16 h-16 mb-3"
                    />
                    <p className="text-sm md:text-base font-medium text-gray-200">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </div>
  );
}

export default Skills;
