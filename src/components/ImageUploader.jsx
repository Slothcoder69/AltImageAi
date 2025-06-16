import React, { useState } from "react";
import "./thinker.css";
import "./lazy.css";

export default function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="card-glass max-w-3xl mx-auto mt-12 p-8 shadow-neon border border-cyan-500 rounded-xl">
  <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 drop-shadow-md">
  Upload Image
</h2>


      <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
        <label className="btn-glow cursor-pointer px-6 py-3 rounded-lg text-white family-2 fsize-20">
          Select File
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </label>

        {image && (
          <div className="border border-gray-500 rounded-lg overflow-hidden w-full sm:w-80 shadow-soft">
            <img
              src={image}
              alt="Preview"
              className="w-full object-cover rounded-lg"
              style={{ maxHeight: "300px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
