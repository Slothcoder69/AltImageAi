import React from "react";
import "./thinker.css"

function Footer(){
      return (
    <footer className="w-full bg-black-100 p-4 mt-10 boxshadow-1">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <p className="text-white fsize-16 i family-1 shoadowytxt-1">
          © 2025 AutoAlt — Built with ❤️ for accessibility
        </p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-200 transition fsize-14 family-2"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-white hover:text-yellow-200 transition fsize-14 family-2"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;