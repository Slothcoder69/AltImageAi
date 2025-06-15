import React from "react" 
import "./thinker.css"

function Header(){
    return(
        <>
        <header className="w-full bg-gradient-to-r from-indigo-800 to-purple-800 p-4 shadow-lg boxshadow-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo or Brand Name */}
        <div className="text-white text-3xl font-bold googlefonts2 shoadowytxt-2">
          AutoAlt
        </div>

        {/* Tagline or Navigation */}
        <div className="hidden sm:flex space-x-4 items-center">
          <span className="text-white font-light fsize-18 i">AI-Driven Image Captioning</span>
          <a
            href="#features"
            className="text-white hover:text-yellow-300 transition duration-200 fsize-16"
          >
            Features
          </a>
          <a
            href="#about"
            className="text-white hover:text-yellow-300 transition duration-200 fsize-16"
          >
            About
          </a>
        </div>
      </div>
    </header>
        </>
    )
}
export default Header;