import React from "react";

function Footer() {
  return (
    <div>
      <footer className="border-t border-white/5 py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} — Design and Developed by Mahi Jain.
      </footer>
    </div>
  );
}

export default Footer;
