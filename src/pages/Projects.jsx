import React from "react";
import Card from "../components/Card";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import WorkCard from "../components/WorkCard";
function Projects() {
  return (
    <div>
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
    </div>
  );
}

export default Projects;
