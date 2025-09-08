import React, { useState } from "react";
import Container from "../components/Container.jsx";
import GradientText from "../components/GradientText.jsx";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-[#130f18]/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="text-lg font-semibold tracking-wider">
          <GradientText>MAHI JAIN</GradientText>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/75">
          {[
            ["About Me", "#about"],
            ["Experience", "#experience"],
            ["Projects", "#projects"],
            ["Skills", "#skills"],
            // ["More About Me", "#about"],
            ["Contact Me", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="hover:text-white scroll-smooth"
            >
              {label}
            </a>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-[#130f18] border-t border-white/5 md:hidden">
            <ul className="flex flex-col items-center gap-4 py-4 text-sm text-white/75">
              {[
                ["About Me", "#about"],
                ["Experience", "#expeienece"],
                ["Projects", "#projects"],
                ["Skills", "#skills"],
                // ["More About Me", "#about"],
                ["Contact Me", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}

export default Navbar;
