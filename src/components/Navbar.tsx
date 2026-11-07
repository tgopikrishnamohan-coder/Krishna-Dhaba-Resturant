import { useEffect, useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { useScrolled, useScrollSpy } from '@/hooks/useScroll';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'story', label: 'Our Story' },
  { id: 'signature', label: 'Signatures' },
  { id: 'menu', label: 'Menu' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reserve', label: 'Reserve' },
];

export default function Navbar() {
  const scrolled = useScrolled();
  const active = useScrollSpy();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-chocolate-950/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.4)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <button onClick={() => go('home')} className="group flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-burnt-500 to-chocolate-700 shadow-warm transition-transform group-hover:scale-110">
            <Flame className="h-5 w-5 text-golden-300" />
          </span>
          <span className="flex flex-col leading-none text-left">
            <span className="font-display text-xl font-bold text-cream-50">Saffron <span className="text-burnt-400">&amp;</span> Smoke</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-golden-400/80">Premium Indian Kitchen</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active === l.id ? 'text-golden-300' : 'text-cream-200 hover:text-golden-300'
                }`}
              >
                {l.label}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 bg-gradient-to-r from-burnt-400 to-golden-400 transition-all duration-300 ${
                    active === l.id ? 'w-6' : 'w-0'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <button
            onClick={() => go('reserve')}
            className="rounded-full bg-gradient-to-r from-burnt-500 to-burnt-600 px-6 py-2.5 text-sm font-semibold text-white shadow-warm transition-all hover:scale-105 hover:shadow-glow"
          >
            Book a Table
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-chocolate-800/60 text-cream-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-4 mt-3 space-y-1 rounded-2xl bg-chocolate-900/95 p-4 backdrop-blur-md">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`flex w-full items-center rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                  active === l.id ? 'bg-chocolate-800 text-golden-300' : 'text-cream-200 hover:bg-chocolate-800/60'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="pt-1">
            <button
              onClick={() => go('reserve')}
              className="w-full rounded-xl bg-gradient-to-r from-burnt-500 to-burnt-600 px-4 py-3 text-base font-semibold text-white"
            >
              Book a Table
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
