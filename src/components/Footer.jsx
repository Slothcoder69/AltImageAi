import React from "react";
import "./thinker.css";

function Footer() {
  return (
    <footer className="w-full bg-black-200 py-6 mt-10 boxshadow-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        <p className="twhite-100 fsize-16 i family-2 shoadowytxt-2 text-center sm:text-left">
          © 2025 AutoAlt — Empowering accessibility with AI ✨
        </p>
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="twhite-100 hover:underline transition fsize-16"
          >
            GitHub
          </a>
          <a
            href="#"
            className="twhite-100 hover:underline transition fsize-16"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
