import { useEffect, useState } from 'react';
import { ChevronDown, Star, UtensilsCrossed } from 'lucide-react';
import { heroSlides } from '@/data/menu';

function Steam({ left, delay, duration }: { left: string; delay: string; duration: string }) {
  return (
    <span
      className="pointer-events-none absolute bottom-0 h-24 w-24 rounded-full bg-white/10 blur-2xl animate-steam"
      style={{ left, animationDelay: delay, animationDuration: duration }}
    />
  );
}

export default function Hero() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background slides with Ken Burns + crossfade */}
      <div className="absolute inset-0">
        {heroSlides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-[1600ms] ease-in-out"
            style={{ opacity: i === slide ? 1 : 0 }}
          >
            <img
              src={src}
              alt="Signature Indian dish"
              className={`h-full w-full object-cover ${i === slide ? 'animate-kenburns' : ''}`}
            />
          </div>
        ))}
        {/* Warm cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate-950/80 via-chocolate-950/55 to-chocolate-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate-950/85 via-transparent to-chocolate-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(239,179,12,0.18),transparent_60%)]" />
      </div>

      {/* Steam effect */}
      <div className="pointer-events-none absolute bottom-24 left-1/2 hidden h-40 w-64 -translate-x-1/2 md:block">
        <Steam left="15%" delay="0s" duration="4s" />
        <Steam left="40%" delay="1.2s" duration="5s" />
        <Steam left="65%" delay="2.4s" duration="4.5s" />
        <Steam left="85%" delay="0.6s" duration="5.5s" />
      </div>

      {/* Decorative spinning mandala ring */}
      <div className="pointer-events-none absolute -right-32 top-24 hidden h-80 w-80 animate-spinSlow rounded-full border border-golden-400/10 lg:block" />
      <div className="pointer-events-none absolute -right-24 top-32 hidden h-64 w-64 animate-spinSlow rounded-full border border-burnt-400/10 lg:block" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-24 text-center">
        <div className="animate-fadeIn mb-6 inline-flex items-center gap-2 rounded-full border border-golden-400/30 bg-chocolate-900/50 px-5 py-2 backdrop-blur-sm">
          <span className="flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-golden-400 text-golden-400" />
            ))}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-golden-200">
            Est. 1984 · Awarded Kitchen
          </span>
        </div>

        <h1 className="animate-fadeInUp text-5xl font-bold leading-[1.05] text-cream-50 sm:text-6xl md:text-7xl lg:text-8xl">
          Where Every Spice
          <span className="block shimmer-text italic">Tells a Story</span>
        </h1>

        <p className="animate-fadeInUp mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-cream-200/90 sm:text-xl" style={{ animationDelay: '0.15s' }}>
          Royal biryanis, charcoal-kissed tandoor, and slow-simmered curries —
          crafted from heirloom recipes and the finest saffron. A dining experience
          fit for royalty.
        </p>

        <div className="animate-fadeInUp mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: '0.3s' }}>
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-burnt-500 to-burnt-600 px-8 py-4 text-base font-semibold text-white shadow-warm transition-all hover:scale-105 hover:shadow-glow"
          >
            <UtensilsCrossed className="h-5 w-5 transition-transform group-hover:rotate-12" />
            Explore the Menu
          </button>
          <button
            onClick={() => document.getElementById('reserve')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full border border-cream-300/30 bg-chocolate-900/40 px-8 py-4 text-base font-semibold text-cream-100 backdrop-blur-sm transition-all hover:border-golden-400/60 hover:text-golden-300"
          >
            Reserve a Table
          </button>
        </div>

        {/* Slide indicators */}
        <div className="animate-fadeIn mt-12 flex items-center justify-center gap-2" style={{ animationDelay: '0.6s' }}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === slide ? 'w-8 bg-golden-400' : 'w-2 bg-cream-300/40 hover:bg-cream-300/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-cream-300/70 transition-colors hover:text-golden-300"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-float" />
      </button>
    </section>
  );
}
