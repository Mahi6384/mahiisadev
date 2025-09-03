import React from "react";
import Container from "../components/Container.jsx";
function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-[#130f18]/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className=" px-4 py-2 text-md font-semibold tracking-wide text-white/90">
          MAHI JAIN
        </div>
        <nav className="items-center gap-8 text-sm text-white/75 md:flex">
          {[
            ["About Me", "#about"],
            ["Experience", "#skills"],
            ["Projects", "#portfolio"],
            ["Skills", "#skills"],
            ["More About Me", "#about"],
            ["Contact Me", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} className="hover:text-white">
              {label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
