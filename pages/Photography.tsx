import React, { useState, useEffect } from 'react';
import { PHOTOS } from '../constants';
import { MapPin, X, Camera, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { Photo } from '../types';

const Photography: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % PHOTOS.length);
    }
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + PHOTOS.length) % PHOTOS.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex]);

  const renderPhotoCard = (photo: Photo) => {
    let aspectRatioClass = 'aspect-square';
    if (photo.aspectRatio) {
      // Tailwind arbitrary value for aspect ratio
      aspectRatioClass = `aspect-[${photo.aspectRatio}]`;
    } else {
      switch (photo.size) {
        case 'tall': aspectRatioClass = 'aspect-[3/4]'; break;
        case 'extra-tall': aspectRatioClass = 'aspect-[2/3]'; break;
        case 'wide': aspectRatioClass = 'aspect-[4/3]'; break;
        case 'extra-wide': aspectRatioClass = 'aspect-[16/9]'; break;
        case 'large': aspectRatioClass = 'aspect-square'; break;
        default: aspectRatioClass = 'aspect-square';
      }
    }

    const globalIndex = PHOTOS.findIndex(p => p.id === photo.id);

    return (
      <div 
        key={photo.id}
        className="group cursor-pointer relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 bg-stone-200"
        onClick={() => openLightbox(globalIndex)}
      >
        <div className={`relative overflow-hidden ${aspectRatioClass}`}>
          <img 
            src={photo.url} 
            alt={photo.caption}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="absolute inset-0 flex items-center justify-center">
              <ZoomIn className="w-10 h-10 text-white transform scale-75 group-hover:scale-100 transition-transform duration-300" strokeWidth={1.5} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm font-medium leading-tight">{photo.caption}</p>
              {photo.location && (
                <p className="text-white/70 text-xs mt-1 flex items-center gap-1">
                  <MapPin size={10} /> {photo.location}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-serif font-bold text-academic-900 mb-4 flex items-center gap-3">
          <Camera className="text-academic-500" size={32} strokeWidth={1.5} />
          Photography
        </h1>
        <p className="text-stone-500 text-xl">
          Capturing perspectives from academic journeys and personal explorations. 
          Each frame tells a story of place, light, and moment.
        </p>
      </div>

      {/* Manual Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          {PHOTOS
            .filter(photo => photo.column === 1)
            .sort((a, b) => a.order - b.order)
            .map(renderPhotoCard)}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          {PHOTOS
            .filter(photo => photo.column === 2)
            .sort((a, b) => a.order - b.order)
            .map(renderPhotoCard)}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          {PHOTOS
            .filter(photo => photo.column === 3)
            .sort((a, b) => a.order - b.order)
            .map(renderPhotoCard)}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10 p-2 hover:bg-white/10 rounded-full"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-10 p-3 hover:bg-white/10 rounded-full"
            aria-label="Previous"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-10 p-3 hover:bg-white/10 rounded-full"
            aria-label="Next"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          {/* Image Container */}
          <div className="max-w-5xl w-full max-h-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <div className="relative group">
              <img 
                src={PHOTOS[selectedPhotoIndex].url}
                alt={PHOTOS[selectedPhotoIndex].caption}
                className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl"
              />
            </div>
            <div className="mt-8 text-center max-w-3xl px-4">
              <h3 className="text-white text-2xl font-serif font-medium mb-3">
                {PHOTOS[selectedPhotoIndex].caption}
              </h3>
              {PHOTOS[selectedPhotoIndex].description && (
                <p className="text-stone-400 text-lg font-light leading-relaxed italic">
                  "{PHOTOS[selectedPhotoIndex].description}"
                </p>
              )}
              <div className="flex items-center justify-center gap-4 mt-6">
                {PHOTOS[selectedPhotoIndex].location && (
                  <p className="text-stone-500 text-sm flex items-center gap-1.5">
                    <MapPin size={14} className="text-academic-400" /> {PHOTOS[selectedPhotoIndex].location}
                  </p>
                )}
                <span className="text-stone-600 text-sm">
                  {selectedPhotoIndex + 1} / {PHOTOS.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photography;