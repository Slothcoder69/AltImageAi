import React from 'react';
import Header from '../components/header';
import ImageUploader from '../components/ImageUploader';
import Footer from '../components/footer';
import AltTextDisplay from '../components/AltTextDisplay';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col yellow-200 text-gray-900">
      <Header/>
      <main className="flex-1 container mx-auto px-4 py-8">
        <ImageUploader/>
        <AltTextDisplay/>
      </main>
      <Footer/>
    </div>
  );
}
