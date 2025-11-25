import React, { useState, useEffect } from "react";
import Container from "../components/Container.jsx";
import GradientText from "../components/GradientText.jsx";
import NeonButton from "../components/NeonButton.jsx";
import Mahi from "../assets/mahiAboutMe.png";

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
    <section className="relative overflow-hidden" id="about">
      <Container className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-3xl font-extrabold leading-tight  text-white md:text-5xl">
            <GradientText className=" transition-all duration-700 ease-out">
              {`${texts[index].substring(0, subIndex)}|`}
            </GradientText>
            <br />
            {/* <GradientText>DEVELOPER</GradientText> */}
          </h1>
          <p className="mt-6 max-w-xl not-md:text-md text-lg text-white/80">
            Hi, I'm Mahi—a passionate full-stack developer who builds dynamic,
            user-centric applications. I specialize in crafting intuitive UIs
            and scalable backends with modern stacks like Next.js, React.js,
            Express.js, MongoDB, and Node.js. Fueled by a deep curiosity for AI
            and emerging tech, I'm constantly innovating to deliver impactful
            digital experiences that merge creativity with performance.
          </p>
          <div className="mt-8">
            <a href="#experience" className=" transition-all">
              <NeonButton>KNOW MORE </NeonButton>
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          {/* Image with oval border */}
          <div className="relative z-10">
            <div className="absolute -inset-4 -z-10 rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-pink-500/20 to-transparent blur-2xl" />
            <div className="relative mx-auto h-[320px] w-[280px] md:h-[380px] md:w-[340px]">
              {/* Oval border */}
              <div className="absolute inset-0 rounded-[50%] border-4 border-fuchsia-400/50 shadow-lg shadow-fuchsia-500/20" />
              <img
                src={Mahi}
                alt="Portrait"
                className="h-full w-full rounded-[50%] object-cover"
                style={{
                  mixBlendMode: "normal",
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutMe;
