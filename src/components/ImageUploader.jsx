import React, { useState } from "react";
import "./thinker.css";

export default function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-white-100 p-5 rounded-lg shadow-md boxshadow-2 my-8">
      <h2 className="text-2xl font-semibold mb-4 text-center shoadowytxt-2 googlefonts2">
        Upload an Image
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-purple-100 file:text-white
            hover:file:bg-purple-300 transition"
        />

        {image && (
          <div className="max-w-xs w-full boxshadow mt-4 sm:mt-0">
            <img
              src={image}
              alt="Preview"
              className="rounded-lg w-full h-auto object-cover border border-gray-200"
            />
          </div>
        )}
      </div>
    </div>
  );
}
