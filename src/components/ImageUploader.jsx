import React, { useState } from "react";
import "./thinker.css";
import "./lazy.css";
import { getAltText } from "../utils/sendbackend"; // Make sure this exists

export default function ImageUploader({ setGeneratedAltText }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));

      // Read file as base64
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result.split(",")[1]; // Remove data URL prefix
        setLoading(true);
        try {
          const alt = await getAltText(base64Image);
          setGeneratedAltText(alt);
        } catch (error) {
          console.error("Error:", error);
          setGeneratedAltText("❌ Failed to generate alt text.");
        } finally {
          setLoading(false);
        }
      };
      reader.readAsDataURL(file);
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

      {loading && (
        <p className="text-center text-cyan-300 mt-4">Generating alt text...</p>
      )}
    </div>
  );
}
