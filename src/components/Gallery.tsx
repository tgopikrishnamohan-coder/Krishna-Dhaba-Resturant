import { useState } from 'react';
import { X } from 'lucide-react';
import { galleryImages } from '@/data/menu';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative overflow-hidden bg-gradient-to-b from-chocolate-950 to-chocolate-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-pattern opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="The Gallery" title="A Taste You Can" highlight="Almost Smell" />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {galleryImages.map((src, i) => (
            <button
              key={src}
              onClick={() => setLightbox(src)}
              className={`group relative overflow-hidden rounded-2xl shadow-dish transition-all duration-500 hover:shadow-glow ${
                i % 5 === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={src}
                alt="Indian cuisine"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                  i % 5 === 0 ? 'aspect-square md:aspect-[2/1.6]' : 'aspect-square'
                }`}
              />
              <div className="absolute inset-0 bg-chocolate-950/0 transition-colors duration-300 group-hover:bg-chocolate-950/30" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="rounded-full border border-golden-400/50 bg-chocolate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-golden-300 backdrop-blur-sm">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-chocolate-950/90 p-6 backdrop-blur-sm animate-fadeIn"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-chocolate-800/80 text-cream-100 transition-colors hover:text-golden-300" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
          <img
            src={lightbox}
            alt="Indian cuisine enlarged"
            className="max-h-[85vh] max-w-full rounded-2xl shadow-dish animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
