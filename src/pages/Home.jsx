import React, { useState } from 'react'; // ⬅️ Add this
import ImageUploader from '../components/ImageUploader';
import Header from '../components/Header';
import AltTextDisplay from '../components/AltTextDisplay';
import Footer from '../components/Footer';
import '../components/thinker.css';
import '../components/lazy.css';
import altimagebg from "./altimagebg.png";

export default function Home() {
  const [generatedAltText, setGeneratedAltText] = useState(""); // ⬅️ Add this

  return (
    <div className="bg-gradient-to-br from-indigo-950 via-black to-purple-950 text-white min-h-screen flex flex-col" style={{ backgroundImage: `url(${altimagebg})` }}>
      <Header />

      <main className="px-4 sm:px-6 lg:px-8 py-10 flex-1">
        <section className="text-center mb-12">
          <h1 className="text-gradient shoadowytxt-6 text-4xl sm:text-5xl font-bold mb-4">
            AutoAlt: Intelligent Image Captioning
          </h1>
          <p className="text-silver text-lg max-w-2xl mx-auto font-light">
            Upload your images and let AI generate accurate and accessible alt text instantly.
          </p>
        </section>

        <section className="flex-center smallscreen">
          <ImageUploader setGeneratedAltText={setGeneratedAltText} />  {/* ✅ Pass prop */}
          <AltTextDisplay altText={generatedAltText} />                {/* ✅ Pass result */}
        </section>
      </main>

      <Footer />
    </div>
  );
}
