
import React, { useState } from 'react';
import { X, ZoomIn, PlayCircle } from 'lucide-react';

interface InfinitePhotoWallProps {
  images: string[];
}

export const InfinitePhotoWall: React.FC<InfinitePhotoWallProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images || images.length === 0) return null;

  // Helper to detect video files
  const isVideo = (src: string) => {
    return src.toLowerCase().match(/\.(mp4|webm|mov)$/);
  };

  return (
    <>
      <div className="w-full py-16 overflow-hidden bg-slate-900 border-y border-slate-800 relative group">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none"></div>

        {/* Title */}
        <div className="absolute top-4 left-0 right-0 text-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="text-white/30 text-xs font-mono tracking-[0.2em] uppercase">Project Gallery</span>
        </div>

        {/* Scrolling Container */}
        {/* We duplicate the image set to ensure a seamless loop. */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...images, ...images].map((src, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 mx-4 w-64 md:w-80 aspect-video bg-slate-800 rounded-lg overflow-hidden border border-slate-700/50 shadow-2xl relative transition-transform hover:scale-105 duration-300 cursor-pointer group/card"
              onClick={() => setSelectedImage(src)}
            >
              {isVideo(src) ? (
                <>
                  <video 
                    src={src} 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                    muted
                    loop
                    autoPlay
                    playsInline
                  />
                  {/* Video Indicator Icon */}
                  <div className="absolute top-2 right-2 bg-black/50 p-1.5 rounded-full text-white/80 pointer-events-none">
                    <PlayCircle size={16} />
                  </div>
                </>
              ) : (
                <img 
                  src={src} 
                  alt={`Project ${index}`} 
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              )}

              {/* Hover Overlay with Zoom/Play Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-[1px]">
                 <div className="bg-black/50 p-2 rounded-full text-white/90">
                    {isVideo(src) ? <PlayCircle size={32} /> : <ZoomIn size={24} />}
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* CSS for Keyframes */}
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
        `}</style>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors z-50"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          {/* Media Container */}
          <div 
            className="relative max-w-full max-h-full rounded-lg shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the media itself
          >
             {isVideo(selectedImage) ? (
               <video 
                 src={selectedImage} 
                 className="max-w-full max-h-[85vh] rounded-md shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                 controls
                 autoPlay
               />
             ) : (
               <img 
                 src={selectedImage} 
                 alt="Enlarged view" 
                 className="max-w-full max-h-[85vh] object-contain rounded-md shadow-[0_0_50px_rgba(0,0,0,0.5)]"
               />
             )}
          </div>
        </div>
      )}
    </>
  );
};
