import React from 'react';
import Header from '../components/Header';
import ImageUploader from '../components/ImageUploader';
import AltTextDisplay from '../components/AltTextDisplay';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <ImageUploader />
        <AltTextDisplay />
      </main>
      <Footer />
    </div>
  );
}
