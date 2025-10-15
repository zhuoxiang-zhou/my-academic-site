'use client';

import { useState, useEffect } from 'react';

export default function Other() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const photos = [
    { 
      src: '/photos/PKU_tower.jpg', 
      caption: 'Peking University, Beijing, China', 
      description: 'The Boya Tower at Peking University, an iconic symbol of liberal education in China.',
      size: 'tall', // Options: 'tall', 'extra-tall', 'wide', 'extra-wide', 'normal', 'large'
      aspectRatio: null,
      column: 1, // Which column: 1, 2, or 3 (on desktop)
      order: 1   // Order within that column (1 = first, 2 = second, etc.)
    },
    { 
      src: '/photos/Cangnan_boat_flag.jpg', 
      caption: 'Cangnan, Zhejiang, China', 
      description: 'An abandoned boat at sunrise, flag waving in the gentle breeze.',
      size: 'wide',
      aspectRatio: null,
      column: 3,
      order: 2
    },
    { 
      src: '/photos/SF_beach_far_bridge.jpg', 
      caption: 'Golden Gate Bridge, San Francisco, USA', 
      description: 'A foggy day at the beach with the iconic Golden Gate Bridge in the distance.',
      size: 'tall',
      aspectRatio: null,
      column: 1,
      order: 2
    },
    { 
      src: '/photos/SF_fishing.jpg', 
      caption: 'Golden Gate Bridge, San Francisco, USA', 
      description: 'A man got a crab.',
      size: 'tall',
      aspectRatio: null,
      column: 1,
      order: 4
    },
    { 
      src: '/photos/Wuyuan_reflection.jpg', 
      caption: 'Likeng, Wuyuan, Jiangxi, China', 
      description: 'A serene morning in Likeng, capturing the traditional architecture reflected in the water.',
      size: 'normal',
      aspectRatio: null,
      column: 2,
      order: 1
    },
    { 
      src: '/photos/Cangnan_facing_sun.jpg', 
      caption: 'Cangnan, Zhejiang, China', 
      description: 'Facing the sun on a mountain trail, embracing the warmth and light of a new day.',
      size: 'tall',
      aspectRatio: null,
      column: 1,
      order: 3
    },
    { 
      src: '/photos/Plane_overlook.jpg', 
      caption: 'Overlooking the landscape from a plane to Beijing', 
      description: 'Color adjusted for effect.',
      size: null,
      aspectRatio: '9/20',
      column: 3,
      order: 1
    },
    { 
      src: '/photos/SF_palace.jpg', 
      caption: 'Palace of Fine Arts, San Francisco, USA', 
      description: 'Let there be light.',
      size: 'extra-tall',
      aspectRatio: null,
      column: 2,
      order: 2
    },
    { 
      src: '/photos/Summer_Palace_reflection_tree.jpg', 
      caption: 'Summer Palace, Beijing, China',  
      description: 'A tranquil winter scene at the Summer Palace, with bare trees reflected in the ice-covered lake.',
      size: null,
      aspectRatio: '9/20',
      column: 2,
      order: 3
    },
    { 
      src: '/photos/Chengze_Garden_green.jpg', 
      caption: 'Chengze Garden, Beijing, China',  
      description: 'Lush greenery, a peaceful retreat in the heart of the city.',
      size: null,
      aspectRatio: '9/20',
      column: 3,
      order: 3
    },
  ];

  const openLightbox = (index) => {
    setCurrentPhoto(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [lightboxOpen, currentPhoto]);

  return (
    <div className="max-w-7xl">
      <h2 className="text-4xl font-serif text-gray-900 mb-12">Other</h2>

      <div className="space-y-12">
        {/* Hobbies Section */}
        <div>
          {/* <h3 className="text-2xl font-serif text-gray-900 mb-6">Hobbies & Interests</h3> */}
          <p className="text-gray-700 leading-relaxed">
            Outside of academia, I enjoy hiking, cooking, and taking photographs. 
          </p>
        </div>

        {/* Photography Section */}
        <div>
          <h3 className="text-2xl font-serif text-gray-900 mb-6">Photography</h3>
          <p className="text-gray-700 leading-relaxed mb-8">
            Here are some of my favorite photographs. Click on any image to view it in full size.
          </p>
          
          {/* Manual Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              {photos
                .filter(photo => photo.column === 1)
                .sort((a, b) => a.order - b.order)
                .map((photo, index) => {
                  let aspectRatioClass;
                  if (photo.aspectRatio) {
                    aspectRatioClass = `aspect-[${photo.aspectRatio}]`;
                  } else {
                    switch(photo.size) {
                      case 'tall': aspectRatioClass = 'aspect-[3/4]'; break;
                      case 'extra-tall': aspectRatioClass = 'aspect-[2/3]'; break;
                      case 'wide': aspectRatioClass = 'aspect-[4/3]'; break;
                      case 'extra-wide': aspectRatioClass = 'aspect-[16/9]'; break;
                      case 'large': aspectRatioClass = 'aspect-square'; break;
                      default: aspectRatioClass = 'aspect-square';
                    }
                  }

                  return (
                    <div 
                      key={`col1-${index}`}
                      className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      onClick={() => openLightbox(photos.indexOf(photo))}
                    >
                      <div className={`relative overflow-hidden ${aspectRatioClass}`}>
                        <img 
                          src={photo.src} 
                          alt={photo.caption}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-12 h-12 text-white transform scale-75 group-hover:scale-100 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white text-sm font-medium drop-shadow-lg">{photo.caption}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              {photos
                .filter(photo => photo.column === 2)
                .sort((a, b) => a.order - b.order)
                .map((photo, index) => {
                  let aspectRatioClass;
                  if (photo.aspectRatio) {
                    aspectRatioClass = `aspect-[${photo.aspectRatio}]`;
                  } else {
                    switch(photo.size) {
                      case 'tall': aspectRatioClass = 'aspect-[3/4]'; break;
                      case 'extra-tall': aspectRatioClass = 'aspect-[2/3]'; break;
                      case 'wide': aspectRatioClass = 'aspect-[4/3]'; break;
                      case 'extra-wide': aspectRatioClass = 'aspect-[16/9]'; break;
                      case 'large': aspectRatioClass = 'aspect-square'; break;
                      default: aspectRatioClass = 'aspect-square';
                    }
                  }

                  return (
                    <div 
                      key={`col2-${index}`}
                      className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      onClick={() => openLightbox(photos.indexOf(photo))}
                    >
                      <div className={`relative overflow-hidden ${aspectRatioClass}`}>
                        <img 
                          src={photo.src} 
                          alt={photo.caption}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-12 h-12 text-white transform scale-75 group-hover:scale-100 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white text-sm font-medium drop-shadow-lg">{photo.caption}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              {photos
                .filter(photo => photo.column === 3)
                .sort((a, b) => a.order - b.order)
                .map((photo, index) => {
                  let aspectRatioClass;
                  if (photo.aspectRatio) {
                    aspectRatioClass = `aspect-[${photo.aspectRatio}]`;
                  } else {
                    switch(photo.size) {
                      case 'tall': aspectRatioClass = 'aspect-[3/4]'; break;
                      case 'extra-tall': aspectRatioClass = 'aspect-[2/3]'; break;
                      case 'wide': aspectRatioClass = 'aspect-[4/3]'; break;
                      case 'extra-wide': aspectRatioClass = 'aspect-[16/9]'; break;
                      case 'large': aspectRatioClass = 'aspect-square'; break;
                      default: aspectRatioClass = 'aspect-square';
                    }
                  }

                  return (
                    <div 
                      key={`col3-${index}`}
                      className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                      onClick={() => openLightbox(photos.indexOf(photo))}
                    >
                      <div className={`relative overflow-hidden ${aspectRatioClass}`}>
                        <img 
                          src={photo.src} 
                          alt={photo.caption}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-12 h-12 text-white transform scale-75 group-hover:scale-100 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white text-sm font-medium drop-shadow-lg">{photo.caption}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
            aria-label="Previous"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
            aria-label="Next"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="max-w-6xl max-h-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={photos[currentPhoto].src}
              alt={photos[currentPhoto].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center max-w-2xl">
              <p className="text-white text-xl font-medium mb-2">{photos[currentPhoto].caption}</p>
              <p className="text-gray-300 text-base">{photos[currentPhoto].description}</p>
              <p className="text-gray-400 text-sm mt-3">{currentPhoto + 1} / {photos.length}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}