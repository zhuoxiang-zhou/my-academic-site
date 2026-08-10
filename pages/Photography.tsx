import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Camera, ChevronLeft, ChevronRight, MapPin, X, ZoomIn } from 'lucide-react';
import { PHOTOS } from '../constants';
import { Photo } from '../types';

const getColumnCount = () => {
  if (typeof window === 'undefined') return 1;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
};

const PhotoVerse: React.FC<{ photo: Photo; lightbox?: boolean }> = ({ photo, lightbox = false }) => {
  const language = photo.literaryQuote.language;
  const isChinese = language?.startsWith('zh');
  const verseClass = lightbox ? 'mt-4' : 'mt-3';
  const quoteClass = isChinese
    ? `${language === 'zh-Hant' ? 'font-cjk-tc' : 'font-cjk-sc'} not-italic tracking-[0.035em] ${
        lightbox ? 'text-base leading-[1.8] text-stone-200 md:text-lg' : 'text-[0.95rem] leading-[1.75] text-stone-700'
      }`
    : `font-literary italic ${
        lightbox ? 'text-lg leading-relaxed text-stone-200 md:text-xl' : 'text-[0.98rem] leading-[1.6] text-stone-700'
      }`;
  const translationClass = lightbox
    ? 'mt-1.5 font-literary text-[0.95rem] italic leading-relaxed text-stone-400 md:text-base'
    : 'mt-1.5 font-literary text-[0.875rem] italic leading-[1.6] text-stone-500';
  const citationClass = lightbox
    ? 'mt-2.5 block font-sans text-[0.7rem] not-italic tracking-[0.025em] text-stone-500 md:text-xs'
    : 'mt-2 block font-sans text-[0.68rem] not-italic leading-relaxed tracking-[0.02em] text-stone-400';
  return (
    <blockquote className={verseClass} lang={language}>
      <p className={quoteClass}>{photo.literaryQuote.text}</p>
      {photo.literaryQuote.translation && (
        <p className={translationClass} lang="en">{photo.literaryQuote.translation}</p>
      )}
      <cite className={citationClass}>
        — {photo.literaryQuote.citation}
      </cite>
    </blockquote>
  );
};

const Photography: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [columnCount, setColumnCount] = useState(getColumnCount);
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const nextColumnCount = getColumnCount();
      setColumnCount((current) => current === nextColumnCount ? current : nextColumnCount);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visiblePhotos = useMemo(
    () => PHOTOS
      .filter((photo) => showAll || photo.featured)
      .sort((a, b) => a.order - b.order || a.column - b.column),
    [showAll],
  );

  const photoColumns = useMemo(() => {
    const columns: Array<Array<{ photo: Photo; readingIndex: number }>> = Array.from(
      { length: columnCount },
      () => [],
    );

    visiblePhotos.forEach((photo, readingIndex) => {
      columns[readingIndex % columnCount].push({ photo, readingIndex });
    });

    return columns;
  }, [columnCount, visiblePhotos]);

  const selectedPhotoIndex = selectedPhotoId === null
    ? -1
    : visiblePhotos.findIndex((photo) => photo.id === selectedPhotoId);
  const selectedPhoto = selectedPhotoIndex >= 0 ? visiblePhotos[selectedPhotoIndex] : null;
  const isLightboxOpen = selectedPhoto !== null;
  const remainingPhotoCount = PHOTOS.length - visiblePhotos.length;

  const openLightbox = (photoId: string, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setSelectedPhotoId(photoId);
  };

  const closeLightbox = () => {
    setSelectedPhotoId(null);
  };

  const movePhoto = (direction: -1 | 1) => {
    if (selectedPhotoIndex < 0) return;
    const nextIndex = (
      selectedPhotoIndex + direction + visiblePhotos.length
    ) % visiblePhotos.length;
    setSelectedPhotoId(visiblePhotos[nextIndex].id);
  };

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = previousOverflow;
      lastTriggerRef.current?.focus({ preventScroll: true });
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeLightbox();
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        movePhoto(1);
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        movePhoto(-1);
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => element.offsetParent !== null);

      if (focusableElements.length === 0) return;
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, selectedPhotoIndex, visiblePhotos]);

  const renderPhotoCard = (photo: Photo, readingIndex: number) => (
    <figure key={photo.id} className="group">
      <button
        type="button"
        className="block w-full rounded-lg text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-academic-500 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50"
        aria-label={`Open ${photo.title}, ${photo.location}`}
        onClick={(event) => openLightbox(photo.id, event.currentTarget)}
      >
        <span className="relative block overflow-hidden rounded-lg bg-stone-200">
          <img
            src={photo.url}
            alt={`${photo.title}, ${photo.location}`}
            className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03] group-focus-within:scale-[1.03]"
            loading={readingIndex < 3 ? 'eager' : 'lazy'}
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/15 group-hover:opacity-100 group-focus-within:bg-black/15 group-focus-within:opacity-100" aria-hidden="true">
            <ZoomIn className="h-9 w-9 text-white drop-shadow" strokeWidth={1.5} />
          </span>
        </span>
      </button>

      <figcaption className="mt-[1.125rem]">
        <h2 className="font-serif text-[1.3rem] font-medium leading-snug tracking-[-0.015em] text-academic-900">
          {photo.title}
        </h2>
        <p className="mt-1.5 flex items-start gap-1.5 text-[0.8rem] leading-5 tracking-[-0.005em] text-stone-500">
          <MapPin className="mt-[0.2rem] h-3.5 w-3.5 shrink-0 text-stone-400" strokeWidth={1.4} aria-hidden="true" />
          <span>
            {photo.location}
            {photo.year !== undefined && <><span aria-hidden="true"> · </span>{photo.year}</>}
          </span>
        </p>
        <PhotoVerse photo={photo} />
      </figcaption>
    </figure>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-12">
        <h1 className="mb-4 flex items-center gap-3 font-serif text-4xl font-bold text-academic-900">
          <Camera className="text-academic-500" size={32} strokeWidth={1.5} aria-hidden="true" />
          Photography
        </h1>
        <p className="max-w-4xl text-xl leading-relaxed text-stone-500">
          Light leaves; the frame remembers.
        </p>
      </header>

      <div
        id="photography-gallery"
        className={`grid gap-8 md:gap-10 ${
          columnCount === 3 ? 'grid-cols-3' : columnCount === 2 ? 'grid-cols-2' : 'grid-cols-1'
        }`}
      >
        {photoColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex min-w-0 flex-col gap-10">
            {column.map(({ photo, readingIndex }) => renderPhotoCard(photo, readingIndex))}
          </div>
        ))}
      </div>

      {!showAll && remainingPhotoCount > 0 && (
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            className="rounded-full border border-academic-300 bg-white px-7 py-3 text-base font-medium text-academic-800 transition-colors hover:border-academic-500 hover:bg-academic-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-academic-500 focus-visible:ring-offset-4 focus-visible:ring-offset-stone-50"
            aria-controls="photography-gallery"
            onClick={() => setShowAll(true)}
          >
            View {remainingPhotoCount} more photographs
          </button>
        </div>
      )}

      {selectedPhoto && (
        <div
          ref={dialogRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="photo-lightbox-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className="absolute right-4 top-4 z-10 rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-6 md:top-6"
            aria-label="Close photograph"
            onClick={closeLightbox}
          >
            <X size={32} />
          </button>

          <button
            type="button"
            className="absolute left-2 z-10 rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:left-8 md:p-3"
            aria-label="Previous photograph"
            onClick={() => movePhoto(-1)}
          >
            <ChevronLeft className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1} />
          </button>

          <button
            type="button"
            className="absolute right-2 z-10 rounded-full p-2 text-white/60 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white md:right-8 md:p-3"
            aria-label="Next photograph"
            onClick={() => movePhoto(1)}
          >
            <ChevronRight className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1} />
          </button>

          <div className="flex max-h-full w-full max-w-5xl flex-col items-center px-8 md:px-16">
            <img
              src={selectedPhoto.url}
              alt={`${selectedPhoto.title}, ${selectedPhoto.location}`}
              className="max-h-[68vh] max-w-full rounded object-contain shadow-2xl md:max-h-[72vh]"
            />
            <div className="mt-5 max-w-3xl px-2 text-center md:mt-7 md:px-4">
              <h2 id="photo-lightbox-title" className="font-serif text-2xl font-medium text-white">
                {selectedPhoto.title}
              </h2>
              <p className="mt-2 text-sm text-stone-400">
                {selectedPhoto.location}
                {selectedPhoto.year !== undefined && <><span aria-hidden="true"> · </span>{selectedPhoto.year}</>}
              </p>
              <PhotoVerse photo={selectedPhoto} lightbox />
              <p className="mt-4 text-sm text-stone-500" aria-live="polite">
                {selectedPhotoIndex + 1} / {visiblePhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Photography;
