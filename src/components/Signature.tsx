import { Leaf, Flame, Star } from 'lucide-react';
import { menu, dessertImage, type MenuItem } from '@/data/menu';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/hooks/useReveal';

function TagRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {item.veg ? (
        <span className="inline-flex items-center gap-1 rounded-full border border-success-500/40 bg-success-500/10 px-2.5 py-0.5 text-[11px] font-medium text-success-400">
          <Leaf className="h-3 w-3" /> Veg
        </span>
      ) : (
        <span className="inline-flex items-center gap-1 rounded-full border border-burnt-500/40 bg-burnt-500/10 px-2.5 py-0.5 text-[11px] font-medium text-burnt-300">
          Non-veg
        </span>
      )}
      {item.spicy && (
        <span className="inline-flex items-center gap-1 rounded-full border border-error-500/40 bg-error-500/10 px-2.5 py-0.5 text-[11px] font-medium text-error-400">
          <Flame className="h-3 w-3" /> Spicy
        </span>
      )}
      {item.signature && (
        <span className="inline-flex items-center gap-1 rounded-full border border-golden-400/40 bg-golden-400/10 px-2.5 py-0.5 text-[11px] font-medium text-golden-300">
          <Star className="h-3 w-3 fill-golden-300" /> Signature
        </span>
      )}
    </div>
  );
}

export default function Signature() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const signatures: MenuItem[] = menu.flatMap((c) => c.items).filter((i) => i.signature).slice(0, 4);

  const featured = signatures[0];
  const rest = signatures.slice(1, 4);

  return (
    <section id="signature" className="relative overflow-hidden bg-gradient-to-b from-chocolate-950 via-chocolate-900 to-chocolate-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-pattern opacity-40" />
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-golden-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Chef's Signatures"
          title="Dishes Worth"
          highlight="the Journey"
        />

        <div ref={ref} className={`mt-14 grid gap-6 lg:grid-cols-2 ${visible ? 'is-visible' : ''}`}>
          {/* Featured large card */}
          <article className="reveal group relative overflow-hidden rounded-[2rem] shadow-dish">
            <img
              src={featured.image}
              alt={featured.name}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110 lg:aspect-[5/6]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950 via-chocolate-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-golden-400/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-chocolate-950">
                <Star className="h-3 w-3 fill-chocolate-950" /> Most Loved
              </span>
              <h3 className="mt-4 font-display text-3xl font-bold text-cream-50 sm:text-4xl">{featured.name}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-cream-200/85 sm:text-base">{featured.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <TagRow item={featured} />
                <span className="font-display text-2xl font-bold text-golden-300">${featured.price}</span>
              </div>
            </div>
          </article>

          {/* Stacked smaller cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((item, i) => (
              <article
                key={item.id}
                className={`reveal group relative overflow-hidden rounded-3xl shadow-dish ${visible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950 via-chocolate-950/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-bold text-cream-50">{item.name}</h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-cream-200/80">{item.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <TagRow item={item} />
                    <span className="font-display text-lg font-bold text-golden-300">${item.price}</span>
                  </div>
                </div>
              </article>
            ))}

            {/* Dessert spotlight */}
            <article className={`reveal group relative overflow-hidden rounded-3xl bg-gradient-to-br from-chocolate-800 to-chocolate-900 p-6 shadow-dish ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
              <div className="absolute -right-6 -top-6 h-28 w-28 overflow-hidden rounded-full border-4 border-chocolate-800">
                <img src={dessertImage} alt="Gulab jamun" className="h-full w-full object-cover" />
              </div>
              <div className="mt-16">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-golden-400">Sweet Finale</span>
                <h3 className="mt-2 font-display text-2xl font-bold text-cream-50">Gulab Jamun</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-300/75">
                  Warm milk-solid dumplings soaked in rose-cardamom syrup, served with pistachio shavings.
                </p>
                <span className="mt-4 inline-block font-display text-xl font-bold text-golden-300">$7</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
