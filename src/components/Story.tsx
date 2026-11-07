import { Leaf, Flame, Award } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import { storyImage, ambianceImage } from '@/data/menu';

const pillars = [
  { icon: Leaf, title: 'Heirloom Recipes', text: 'Three generations of family recipes, unchanged since 1984.' },
  { icon: Flame, title: 'Live Tandoor', text: 'Charcoal clay ovens fired throughout service for true smoke.' },
  { icon: Award, title: 'Award-Winning', text: 'Recognised by the National Culinary Guild for authenticity.' },
];

export default function Story() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="story" className="relative overflow-hidden bg-chocolate-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-pattern opacity-60" />
      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-burnt-600/10 blur-3xl" />

      <div ref={ref} className={`relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 ${visible ? 'is-visible' : ''}`}>
        {/* Images */}
        <div className="reveal relative">
          <div className="overflow-hidden rounded-[2rem] shadow-dish">
            <img
              src={storyImage}
              alt="Warm restaurant interior"
              className="aspect-[5/4] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden w-48 overflow-hidden rounded-2xl border-4 border-chocolate-950 shadow-dish sm:block">
            <img src={ambianceImage} alt="Candle-lit dining table" className="aspect-square w-full object-cover" />
          </div>
          <div className="absolute -left-4 -top-4 flex h-24 w-24 rotate-12 items-center justify-center rounded-full bg-gradient-to-br from-golden-400 to-burnt-500 text-center shadow-glow">
            <div className="leading-tight">
              <div className="font-display text-2xl font-bold text-chocolate-950">40</div>
              <div className="text-[9px] font-semibold uppercase tracking-wider text-chocolate-900">Years of Craft</div>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className={`reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <span className="flex items-center gap-3 text-golden-400">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-golden-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em]">Our Story</span>
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-cream-50 sm:text-5xl">
            A Legacy Cooked in <span className="text-gradient-gold italic">Saffron &amp; Smoke</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream-200/85">
            Born in a small Delhi kitchen and carried across oceans, our recipes honour the
            royal kitchens of India. Every dish begins with whole spices, stone-ground by hand,
            and ends over the breath of a charcoal flame.
          </p>
          <p className="mt-4 text-base leading-relaxed text-cream-300/70">
            We grind our own garam masala, knead breads to order, and seal each biryani pot
            with dough — just as it has been done for centuries. This is not fast food.
            This is memory, served warm.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-chocolate-700/50 bg-chocolate-900/40 p-5 transition-all hover:border-golden-400/40 hover:bg-chocolate-800/40"
              >
                <p.icon className="h-7 w-7 text-burnt-400 transition-transform group-hover:scale-110" />
                <h3 className="mt-3 font-display text-lg font-semibold text-cream-50">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-cream-300/70">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
