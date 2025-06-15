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
    <div className="darktheme p-6 rounded-lg boxshadow-3 max-w-3xl mx-auto mt-10 border border-gray-300 border-r-2 ">
      <h2 className="centertext fsize-28 mb-5  googlefonts2 shoadowytxt-2 tblue-200 fsize-32">
        Upload Image
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <label className="cursor-pointer torange-100 fsize-20 border-2 border-purple-200 px-5 py-2 rounded-lg hover:bg-purple-300 hover:twhite-100 transition family-2">
          Select File
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </label>

        {image && (
          <div className="mt-6 sm:mt-0 w-full sm:w-80 border border-gray-200 rounded-lg overflow-hidden">
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
