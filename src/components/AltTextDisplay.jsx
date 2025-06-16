import React from "react";
import "./thinker.css";
import "./lazy.css";

export default function AltTextDisplay({ altText = "Alt text will appear here..." }) {
  return (
    <div className="card-glass mt-10 p-6 max-w-3xl mx-auto shadow-purple rounded-xl">
   <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-center mb-4 drop-shadow-lg">
  Generated Alt Text
</h3>


      <div className="bg-dark border border-cyan-400 p-4 rounded-lg shadow-soft">
        <p className="text-lightblue fsize-18 italic family-2">
          {altText}
        </p>
      </div>
    </div>
  );
}
