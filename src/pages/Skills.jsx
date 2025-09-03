import React from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

function Skills() {
  return (
    <div>
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
    </div>
  );
}

export default Skills;
