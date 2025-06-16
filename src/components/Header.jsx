import React from "react";
import "./thinker.css";
import "./lazy.css";

function Header() {
  return (
    <header className="w-full bg-gradient-1 boxshadow-3 p-4">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <h1 className="  shoadowytxt-2 text-3xl sm:text-4xl">
          AutoAlt
        </h1>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center gap-6">
          <span className="text-silver fsize-18 italic">AI-Driven Image Captioning</span>
          <a
            href="#features"
            className="text-white hover:text-neon transition duration-300 fsize-16"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-white hover:text-pink transition duration-300 fsize-16"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
