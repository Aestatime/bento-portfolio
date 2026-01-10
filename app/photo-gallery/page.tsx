'use client';
import React, { useState } from 'react';
import { Camera } from 'lucide-react';

// Data foto dari folder lokal
type Photo = {
  id: number;
  url: string;
  title: string;
};

const photoData = {
  horizontal: [
    { id: 1, url: '/img/horizontal/image-1.jpg', title: 'SD Semut Semut The Natural School' },
  ],
  vertical: [
    { id: 1, url: '/img/vertical/image_1.jpg', title: 'Villa' },
    { id: 2, url: '/img/vertical/image_2.jpg', title: 'Mansion' },
    { id: 3, url: '/img/vertical/image_3.jpg', title: 'Locomotive' },
    { id: 4, url: '/img/vertical/image_4.jpg', title: 'Nature' },
    { id: 5, url: '/img/vertical/image_5.jpg', title: 'Nature' },
    { id: 6, url: '/img/vertical/image_6.jpg', title: 'Nature' },
    { id: 7, url: '/img/vertical/image_7.jpg', title: 'Nature' },
    { id: 8, url: '/img/vertical/image_8.jpg', title: 'Nature' },
    { id: 9, url: '/img/vertical/image_9.jpg', title: 'Nature' },
    { id: 10, url: '/img/vertical/image_10.jpg', title: 'Tempo Gelato' },
    { id: 11, url: '/img/vertical/image_11.jpg', title: 'Hoodie Champion' },
    { id: 12, url: '/img/vertical/image_12.jpg', title: 'Building' },
    { id: 13, url: '/img/vertical/image_13.jpeg', title: 'Night View' },
    { id: 14, url: '/img/vertical/image_14.jpeg', title: 'Mount Merapi' },
    { id: 15, url: '/img/vertical/image_15.jpg', title: '' },
    { id: 16, url: '/img/vertical/image_16.jpg', title: 'Temple' },
    { id: 17, url: '/img/vertical/image_17.jpg', title: 'Temple' },
    { id: 18, url: '/img/vertical/image_18.jpg', title: 'Museum' },
    { id: 19, url: '/img/vertical/image_19.jpeg', title: 'Typing Machine' },
    { id: 20, url: '/img/vertical/image_20.jpeg', title: 'Yellow Flower' },
    { id: 21, url: '/img/vertical/image_21.jpg', title: 'Sunset' },
    { id: 22, url: '/img/vertical/image_22.jpg', title: 'Ustad' },
  ],
};

export const metadata = {
  title: 'Photo Gallery',
  description: 'My photography collection - horizontal and vertical photos',
}

export default function PhotoShowcase() {
  const [activeTab, setActiveTab] = useState<'horizontal' | 'vertical'>('horizontal');

  const currentPhotos = photoData[activeTab];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-slate-100 border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shrink-0">
                <Camera className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">Photo Showcase</h1>
                <p className="text-xs sm:text-sm text-gray-600">My photography collection</p>
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
          <div className="flex gap-4 sm:gap-6 md:gap-8">
            <button
              onClick={() => setActiveTab('horizontal')}
              className={`py-3 sm:py-4 px-2 border-b-2 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
                activeTab === 'horizontal'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Horizontal
            </button>
            <button
              onClick={() => setActiveTab('vertical')}
              className={`py-3 sm:py-4 px-2 border-b-2 font-medium text-xs sm:text-sm transition-colors whitespace-nowrap ${
                activeTab === 'vertical'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Vertical
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Stats */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
            <Camera className="w-3 h-3 sm:w-4 sm:h-4" />
            {currentPhotos.length} photos
          </div>
        </div>

        {/* Photo Grid */}
        <div className={`grid gap-3 sm:gap-4 ${
          activeTab === 'horizontal' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
        }`}>
          {currentPhotos.map((photo: Photo) => (
            <div
              key={photo.id}
              className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className={`relative ${
                activeTab === 'horizontal' ? 'aspect-16/10' : 'aspect-3/4'
              }`}>
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                    <h3 className="text-white font-semibold text-sm sm:text-base">{photo.title}</h3>
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