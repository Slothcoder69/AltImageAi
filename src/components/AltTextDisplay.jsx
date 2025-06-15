import React from "react";
import "./thinker.css";

export default function AltTextDisplay({ altText = "Alt text will appear here..." }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg mt-6 shadow boxshadow-1">
      <h3 className="text-xl font-semibold mb-2 shoadowytxt googlefonts2">
        Generated Alt Text
      </h3>

      <div className="bg-white-100 p-4 rounded-md boxshadow">
        <p className="fsize-18 i family-2 tgray-300">
          {altText}
        </p>
      </div>
    </div>
  );
}
