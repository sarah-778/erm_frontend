import React from 'react';
import { Routes, Route } from 'react-router-dom';

// 1. Import ContentProvider
import { ContentProvider } from './context/ContentContext';

// 2. Import components - Fix path casing to match your actual folder structure
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Components/Home';
import Services from './Components/Services';
import About from './Components/About'; // Make sure this path points to the file you are actually editing!
import Contact from './Components/Contact';

import MediaManager from './Components/admin/MediaManager';

export default function App() {
  return (
    <ContentProvider>
      <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col justify-between pt-24">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Admin Dashboard Route */}
            <Route path="/admin/media" element={<MediaManager />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </ContentProvider>
  );
}