import React, { useState, useEffect } from "react";
import Container from "../components/Container.jsx";
import GradientText from "../components/GradientText.jsx";
import NeonButton from "../components/NeonButton.jsx";

function AboutMe() {
  const texts = [
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Developer",
    "Gen AI Developer",
    "Tech Enthusiast",
  ];
  const [index, setIndex] = useState(0); // which text
  const [subIndex, setSubIndex] = useState(0); // which character
  const [reverse, setReverse] = useState(false);
  useEffect(() => {
    if (index === texts.length) return;

    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000); // wait before deleting
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 50 : 100
    ); // speed of typing & deleting

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);
  return (
    <section className="relative">
      <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
            <GradientText className=" transition-all duration-700 ease-out">
              {`${texts[index].substring(0, subIndex)}|`}
            </GradientText>
            <br />
            {/* <GradientText>DEVELOPER</GradientText> */}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/80">
            I am Mahi —{" "}
            <span className="underline decoration-sky-400/60">
              web‑developer
            </span>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            labore explicabo blanditiis maxime, adipisci libero? Nisi, corrupti
            harum eum maiores sit, molestiae pariatur, similique atque fugit ad
            dolorum asperiores porro.{" "}
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
  );
}

export default AboutMe;
