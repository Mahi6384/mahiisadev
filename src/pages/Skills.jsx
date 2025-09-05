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

function Skills() {
  return (
    <div>
      <section id="skills" className="py-14 md:py-20">
        <Container>
          <SectionTitle
            kicker="SKILLS"
            title="The Tools and technologies I use"
          />
          <div className="mx-auto grid grid-cols-5 items-center justify-items-center gap-6 text-4xl md:text-5xl">
            <img className="w-20" src={Html} alt="" />
            {/* <p > Html</p> */}
            <img className="w-20" src={Css} alt="" />
            <img className="w-20" src={Javascript} alt="" />
            <img className="w-20" src={Reactjs} alt="" />
            <img className="w-20" src={Nodejs} alt="" />
            <img className="w-20" src={Tailwindcss} alt="" />
            <img className="w-20" src={Git} alt="" />
            <img className="w-20" src={Github} alt="" />
            <img className="w-20" src={Figma} alt="" />
            <img className="w-20" src={VsCode} alt="" />
            <img className="w-20" src={CIcon} alt="" />
            {/* <img src={CIcon} alt="" /> */}
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Skills;
