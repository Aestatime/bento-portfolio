'use client';
import React, { useState } from 'react';
import { Palette, Briefcase, Users, Trophy } from 'lucide-react';

function OptimizedImage({ src, alt }: { src: string; alt: string }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative">
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}
      
      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-auto object-cover transition-all duration-500 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } group-hover:scale-105`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}

// Data desain dari folder lokal
interface Design {
  id: number;
  url: string;
  title: string;
  category: string;
}

const designData: Record<string, Design[]> = {
  personal: [
    { id: 1, url: '/img/personal/poster-1.png', title: 'Forever Young Poster', category: 'Poster' },
    { id: 2, url: '/img/personal/poster-2.png', title: 'Night Racer Poster', category: 'Poster' },
    { id: 3, url: '/img/personal/poster-3.png', title: 'Another April is Gone Poster', category: 'Poster' },
    { id: 4, url: '/img/personal/poster-4.png', title: 'Telepathy Poster', category: 'Poster' },
    { id: 5, url: '/img/personal/poster-5.png', title: 'Starboy Poster', category: 'Poster' },
    { id: 6, url: '/img/personal/poster-6.png', title: 'Tranquillity Poster', category: 'Poster' },
    { id: 7, url: '/img/personal/poster-7.png', title: 'Bauhaus Poster', category: 'Poster' },
    { id: 8, url: '/img/personal/poster-8.png', title: 'Burntout Poster', category: 'Poster' },
    { id: 9, url: '/img/personal/poster-9.png', title: 'Money', category: 'Poster' },
    { id: 10, url: '/img/personal/poster-10.png', title: 'Gradient Poster', category: 'Poster' },
    { id: 11, url: '/img/personal/poster-11.png', title: 'Mountains Poster', category: 'Poster' },
    { id: 12, url: '/img/personal/poster-12.png', title: 'Indonesia Poster', category: 'Poster' },
    { id: 13, url: '/img/personal/poster-13.png', title: 'Rick Astley', category: 'Poster' },
    { id: 14, url: '/img/personal/poster-14.png', title: 'Not Stonk', category: 'Poster' },
    { id: 15, url: '/img/personal/poster-15.png', title: 'I\'m Sorry', category: 'Poster' },
    { id: 16, url: '/img/personal/poster-16.png', title: 'KAI', category: 'Poster' },
    { id: 17, url: '/img/personal/poster-17.png', title: 'Nike Poster', category: 'Poster' },
    { id: 18, url: '/img/personal/poster-18.png', title: 'Cool Design Poster', category: 'Poster' },
    { id: 19, url: '/img/personal/poster-19.png', title: 'Uniqlo Poster', category: 'Poster' },
    { id: 20, url: '/img/personal/poster-20.png', title: 'Adidas Poster', category: 'Poster' },
    { id: 21, url: '/img/personal/poster-21.png', title: 'Flying Turtle', category: 'Poster' },
    { id: 22, url: '/img/personal/poster-22.png', title: 'Dont Forget Your Ticket', category: 'Poster' },
    { id: 23, url: '/img/personal/poster-23.png', title: 'I\'m Watching You', category: 'Poster' },
    { id: 24, url: '/img/personal/poster-24.png', title: 'A Room', category: 'Poster' },
    { id: 25, url: '/img/personal/poster-25.png', title: 'New Disc!', category: 'Poster' },
    { id: 26, url: '/img/personal/poster-26.png', title: 'Sigma Poster', category: 'Poster' },
    { id: 27, url: '/img/personal/poster-27.png', title: 'MOEHA', category: 'Poster' },
  ],
  ipm: [
    { id: 1, url: '/img/ipm/poster-1.PNG', title: 'Teacher Day Poster', category: 'Poster' },
    { id: 2, url: '/img/ipm/poster-2.png', title: 'EID Poster', category: 'Poster' },
    { id: 3, url: '/img/ipm/poster-3.png', title: 'Logo Kewirahusahaan', category: 'Logo' },
    { id: 4, url: '/img/ipm/poster-4.png', title: 'Posni Certificate', category: 'Certificate' },
    { id: 5, url: '/img/ipm/poster-5.png', title: 'Safari Ramadhan Typography', category: 'Typography' },
    { id: 6, url: '/img/ipm/poster-6.png', title: 'Feskem Certificate', category: 'Certificate' },
    { id: 7, url: '/img/ipm/poster-7.png', title: 'Poster Hari Pahlawan', category: 'Poster' },
    { id: 8, url: '/img/ipm/poster-8.png', title: 'Poster Hari Buruh', category: 'Poster' },
    { id: 9, url: '/img/ipm/poster-9.png', title: 'Poster Hari Lahir Pancasila', category: 'Poster' },
    { id: 10, url: '/img/ipm/poster-10.png', title: 'Poster Kesaktian Pancasila', category: 'Poster' },
    { id: 11, url: '/img/ipm/poster-11.png', title: 'Poster Milad', category: 'Poster' },
    { id: 12, url: '/img/ipm/poster-12.png', title: 'Banner DIANPIMTA 2025', category: 'Banner' },
    { id: 13, url: '/img/ipm/poster-13.png', title: 'Frame DIANPIMTA', category: 'Frame' },
    { id: 14, url: '/img/ipm/poster-14.png', title: 'Poster Open Recruitment', category: 'Poster' },
    { id: 15, url: '/img/ipm/poster-15.png', title: 'Muhacast Typography', category: 'Typography' },
    { id: 16, url: '/img/ipm/poster-16.png', title: 'Ramadhan Typography', category: 'Typography' },
    { id: 17, url: '/img/ipm/poster-17.png', title: 'Rakerpim Typography', category: 'Typography' },
    { id: 18, url: '/img/ipm/poster-18.png', title: 'Upgrading Typography', category: 'Typography' },
    { id: 19, url: '/img/ipm/poster-19.png', title: 'IPM Typography', category: 'Typography' },
    { id: 20, url: '/img/ipm/poster-20.png', title: '24 Typography', category: 'Typography' },
    { id: 21, url: '/img/ipm/poster-21.png', title: '25 Typography', category: 'Typography' },
    { id: 22, url: '/img/ipm/poster-22.png', title: 'Frame MOTION', category: 'Frame' },
    { id: 23, url: '/img/ipm/poster-23.png', title: 'Frame THI', category: 'Frame' },
    { id: 24, url: '/img/ipm/poster-24.png', title: 'Frame FESKEM', category: 'Frame' },
    { id: 25, url: '/img/ipm/poster-25.png', title: 'Frame PENGA', category: 'Frame' },
    { id: 26, url: '/img/ipm/poster-26.png', title: 'Frame MUSYRAN', category: 'Frame' },
    { id: 27, url: '/img/ipm/poster-27.png', title: 'Poster MUSYRAN', category: 'Poster' },
    { id: 28, url: '/img/ipm/poster-28.png', title: 'Poster Ramadhan HW', category: 'Poster' },
    { id: 29, url: '/img/ipm/poster-29.png', title: 'Poster Milad HW', category: 'Poster' },
  ],
  basketball: [
    { id: 1, url: '/img/basketball/poster-1.png', title: 'Game Day Poster', category: 'Poster' },
    { id: 2, url: '/img/basketball/poster-2.png', title: 'Game Day Poster', category: 'Poster' },
    { id: 3, url: '/img/basketball/poster-3.png', title: 'Game Day Poster', category: 'Poster' },
    { id: 4, url: '/img/basketball/poster-4.png', title: 'Game Day Poster', category: 'Poster' },
    { id: 5, url: '/img/basketball/poster-5.png', title: 'Roster Team Poster', category: 'Poster' },
  ],
};

export default function DesignShowcase() {
  const [activeTab, setActiveTab] = useState('personal');

  const currentDesigns = designData[activeTab];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-slate-100 border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center shrink-0">
                <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Design Showcase</h1>
                <p className="text-xs sm:text-sm text-gray-600">My graphic design portfolio</p>
              </div>
            </div>
            <a 
              href="/" 
              className="px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap shrink-0"
            >
              ← Back
            </a>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="bg-slate-100 border-b border-gray-200 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 sm:gap-6">
            <button
              onClick={() => setActiveTab('personal')}
              className={`py-3 sm:py-4 px-2 border-b-2 font-medium text-xs sm:text-sm transition-colors flex items-center gap-1.5 sm:gap-2 whitespace-nowrap ${
                activeTab === 'personal'
                  ? 'border-pink-600 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Personal
            </button>
            <button
              onClick={() => setActiveTab('ipm')}
              className={`py-3 sm:py-4 px-2 border-b-2 font-medium text-xs sm:text-sm transition-colors flex items-center gap-1.5 sm:gap-2 whitespace-nowrap ${
                activeTab === 'ipm'
                  ? 'border-pink-600 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              IPM & HW
            </button>
            <button
              onClick={() => setActiveTab('basketball')}
              className={`py-3 sm:py-4 px-2 border-b-2 font-medium text-xs sm:text-sm transition-colors flex items-center gap-1.5 sm:gap-2 whitespace-nowrap ${
                activeTab === 'basketball'
                  ? 'border-pink-600 text-pink-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Basketball
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Stats */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-pink-50 text-pink-700 rounded-full text-xs sm:text-sm font-medium">
            <Palette className="w-3 h-3 sm:w-4 sm:h-4" />
            {currentDesigns.length} designs
          </div>
        </div>

        {/* Design Grid - Masonry Style (Flexible Heights) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 md:gap-6 space-y-4 sm:space-y-5 md:space-y-6">
          {currentDesigns.map((design) => (
            <div
              key={design.id}
              className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer break-inside-avoid mb-4 sm:mb-5 md:mb-6"
            >
              {/* Container menyesuaikan ukuran gambar - Full Flexible with Optimized Loading */}
              <div className="relative">
                <OptimizedImage 
                  src={design.url}
                  alt={design.title}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6">
                    <span className="inline-block px-2.5 py-1 sm:px-3 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full mb-2 sm:mb-3">
                      {design.category}
                    </span>
                    <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">{design.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}