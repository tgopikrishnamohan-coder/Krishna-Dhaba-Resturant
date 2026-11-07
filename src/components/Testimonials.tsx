import { Quote, Star } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/hooks/useReveal';

const reviews = [
  {
    name: 'Aisha Khan',
    role: 'Food Critic, The Herald',
    text: 'The Hyderabadi biryani is the closest I have tasted to my grandmother\'s. Sealed, dum-cooked, and fragrant — a masterclass in patience.',
    rating: 5,
  },
  {
    name: 'James Whitfield',
    role: 'Regular Diner',
    text: 'We celebrate every anniversary here. The butter chicken is silk, the naan is pillow-soft, and the service makes you feel like royalty.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Local Guide, Google',
    text: 'Finally an Indian restaurant that doesn\'t tone down the spice. The tandoori platter arrived sizzling with real charcoal smoke. Superb.',
    rating: 5,
  },
];

export default function Testimonials() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="relative overflow-hidden bg-chocolate-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-pattern opacity-30" />
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-golden-500/5 blur-3xl" />

      <div ref={ref} className={`relative mx-auto max-w-7xl px-6 ${visible ? 'is-visible' : ''}`}>
        <SectionHeading eyebrow="Guest Words" title="Loved by" highlight="Diners & Critics" />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className={`reveal group relative rounded-3xl border border-chocolate-700/40 bg-chocolate-900/40 p-7 shadow-dish transition-all hover:border-golden-400/40 hover:-translate-y-1 ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <Quote className="h-9 w-9 text-burnt-500/60" />
              <blockquote className="mt-4 text-base leading-relaxed text-cream-200/90">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-chocolate-700/40 pt-5">
                <div>
                  <div className="font-display text-lg font-semibold text-cream-50">{r.name}</div>
                  <div className="text-xs text-cream-300/60">{r.role}</div>
                </div>
                <span className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, s) => (
                    <Star key={s} className="h-3.5 w-3.5 fill-golden-400 text-golden-400" />
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
