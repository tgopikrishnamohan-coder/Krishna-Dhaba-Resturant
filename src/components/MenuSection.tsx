import { useState } from 'react';
import { Leaf, Flame, Star, Plus } from 'lucide-react';
import { menu, type MenuItem } from '@/data/menu';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/hooks/useReveal';

function DishCard({ item, index }: { item: MenuItem; index: number }) {
  const { ref, visible } = useReveal<HTMLElement>();
  return (
    <article
      ref={ref}
      className={`reveal group relative flex flex-col overflow-hidden rounded-3xl border border-chocolate-700/40 bg-chocolate-900/50 shadow-dish transition-all duration-500 hover:-translate-y-2 hover:border-golden-400/40 hover:shadow-glow ${visible ? 'is-visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/80 to-transparent" />
        {item.signature && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-golden-400/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-chocolate-950 shadow">
            <Star className="h-3 w-3 fill-chocolate-950" /> Signature
          </span>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-chocolate-950/70 px-3 py-1 font-display text-base font-bold text-golden-300 backdrop-blur-sm">
          ${item.price}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl font-bold leading-snug text-cream-50">{item.name}</h3>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-cream-300/75">{item.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {item.veg ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-success-500/40 bg-success-500/10 px-2 py-0.5 text-[10px] font-medium text-success-400">
                <Leaf className="h-3 w-3" /> Veg
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full border border-burnt-500/40 bg-burnt-500/10 px-2 py-0.5 text-[10px] font-medium text-burnt-300">
                Non-veg
              </span>
            )}
            {item.spicy && (
              <span className="inline-flex items-center gap-1 rounded-full border border-error-500/40 bg-error-500/10 px-2 py-0.5 text-[10px] font-medium text-error-400">
                <Flame className="h-3 w-3" /> Spicy
              </span>
            )}
          </div>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-burnt-500 to-burnt-600 text-white shadow-warm transition-all hover:scale-110 hover:shadow-glow">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function MenuSection() {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active)!;

  return (
    <section id="menu" className="relative overflow-hidden bg-chocolate-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-pattern opacity-30" />
      <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-burnt-600/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow="The Full Menu" title="A Feast for" highlight="Every Sense" />

        {/* Category tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-6 sm:py-3 ${
                active === cat.id
                  ? 'bg-gradient-to-r from-burnt-500 to-burnt-600 text-white shadow-warm'
                  : 'border border-chocolate-700/50 bg-chocolate-900/40 text-cream-200 hover:border-golden-400/40 hover:text-golden-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <p className="mt-5 text-center text-sm italic text-cream-300/60">{category.blurb}</p>

        {/* Dishes grid with keyed remount for animation on tab switch */}
        <div key={active} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item, i) => (
            <DishCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-cream-300/50">
          All dishes can be adjusted for spice level. Please inform us of any allergies.
        </p>
      </div>
    </section>
  );
}
