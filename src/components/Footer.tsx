import { Clock, MapPin, Phone, Mail, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-chocolate-800 bg-chocolate-950 pt-16">
      <div className="absolute inset-0 bg-pattern opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-display text-2xl font-bold text-cream-50">
              Saffron <span className="text-burnt-400">&amp;</span> Smoke
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-cream-300/70">
              A premium Indian kitchen serving royal biryanis, tandoori classics, and
              slow-simmered curries since 1984.
            </p>
            <div className="mt-5 flex gap-3">
              {['Instagram', 'Facebook', 'TripAdvisor'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full border border-chocolate-700/50 px-3 py-1 text-[11px] font-medium text-cream-300/70 transition-colors hover:border-golden-400/40 hover:text-golden-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="flex items-center gap-2 font-display text-lg font-semibold text-cream-50">
              <Clock className="h-4 w-4 text-golden-400" /> Hours
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-cream-300/75">
              <li className="flex justify-between"><span>Mon – Thu</span><span>12:00 – 22:00</span></li>
              <li className="flex justify-between"><span>Fri – Sat</span><span>12:00 – 23:30</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>13:00 – 21:00</span></li>
            </ul>
          </div>

          {/* Visit */}
          <div>
            <h4 className="flex items-center gap-2 font-display text-lg font-semibold text-cream-50">
              <MapPin className="h-4 w-4 text-golden-400" /> Visit
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-cream-300/75">
              42 Spice Lane, Old Town Quarter<br />
              Edinburgh, EH1 2AB
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="flex items-center gap-2 font-display text-lg font-semibold text-cream-50">
              <Users className="h-4 w-4 text-golden-400" /> Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-cream-300/75">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-burnt-400" /> +44 131 555 0198</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-burnt-400" /> reserve@saffronsmoke.com</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-chocolate-800 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-cream-300/50">© 2026 Saffron &amp; Smoke. All rights reserved.</p>
          <p className="text-xs text-cream-300/50">Crafted with saffron, smoke &amp; love.</p>
        </div>
      </div>
    </footer>
  );
}
