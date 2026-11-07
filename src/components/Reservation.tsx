import { useState } from 'react';
import { CalendarDays, Clock, Users, Check, Loader2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/hooks/useReveal';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Reservation() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  });

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      if (form.name && form.email && form.date && form.time) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 1100);
  };

  const inputClass =
    'w-full rounded-xl border border-chocolate-700/60 bg-chocolate-900/60 px-4 py-3 text-cream-100 placeholder-cream-300/40 transition-colors focus:border-golden-400/60 focus:outline-none focus:ring-1 focus:ring-golden-400/40';

  return (
    <section id="reserve" className="relative overflow-hidden bg-chocolate-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-pattern opacity-30" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-burnt-600/10 blur-3xl" />

      <div ref={ref} className={`relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 ${visible ? 'is-visible' : ''}`}>
        {/* Left copy */}
        <div className="reveal">
          <SectionHeading eyebrow="Reserve a Table" title="Join Us for an" highlight="Unforgettable Meal" align="left" />
          <p className="mt-6 max-w-md text-lg leading-relaxed text-cream-200/85">
            Whether it's an intimate dinner or a celebration with twenty guests, our
            team will craft an evening to remember. Walk-ins welcome, but booking ahead
            is recommended on weekends.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { icon: CalendarDays, label: 'Open seven days a week' },
              { icon: Clock, label: 'Last seating one hour before close' },
              { icon: Users, label: 'Private dining for up to 30 guests' },
            ].map((row) => (
              <div key={row.label} className="flex items-center gap-3 text-cream-200/80">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-burnt-500 to-chocolate-700 shadow-warm">
                  <row.icon className="h-5 w-5 text-golden-300" />
                </span>
                <span className="text-sm">{row.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div className={`reveal rounded-3xl border border-chocolate-700/50 bg-chocolate-950/60 p-6 shadow-dish backdrop-blur-sm sm:p-8 ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          {status === 'success' ? (
            <div className="flex flex-col items-center py-10 text-center animate-scaleIn">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-success-500 to-success-700 shadow-glow">
                <Check className="h-8 w-8 text-white" />
              </span>
              <h3 className="mt-5 font-display text-2xl font-bold text-cream-50">Table Requested!</h3>
              <p className="mt-2 max-w-xs text-sm text-cream-300/80">
                Thank you, {form.name.split(' ')[0] || 'friend'}. We've received your request for
                {form.guests} on {form.date} at {form.time}. A confirmation email is on its way.
              </p>
              <button
                onClick={() => { setStatus('idle'); setForm({ name: '', email: '', date: '', time: '', guests: '2', notes: '' }); }}
                className="mt-6 rounded-full border border-chocolate-600 px-5 py-2 text-sm font-medium text-cream-200 transition-colors hover:border-golden-400/50 hover:text-golden-300"
              >
                Make Another Booking
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-golden-400/80">Name</label>
                  <input className={inputClass} type="text" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Your full name" required />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-golden-400/80">Email</label>
                  <input className={inputClass} type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="you@email.com" required />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-golden-400/80">Date</label>
                  <input className={inputClass} type="date" value={form.date} onChange={(e) => update('date', e.target.value)} required />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-golden-400/80">Time</label>
                  <input className={inputClass} type="time" value={form.time} onChange={(e) => update('time', e.target.value)} required />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-golden-400/80">Guests</label>
                  <select className={inputClass} value={form.guests} onChange={(e) => update('guests', e.target.value)}>
                    {['1','2','3','4','5','6','7','8','9','10+'].map((n) => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-golden-400/80">Special Requests</label>
                <textarea className={`${inputClass} min-h-[90px] resize-none`} value={form.notes} onChange={(e) => update('notes', e.target.value)} placeholder="Dietary needs, celebrations, seating preferences..." />
              </div>

              {status === 'error' && (
                <p className="rounded-lg bg-error-500/10 px-4 py-2 text-sm text-error-400">Please complete all required fields before submitting.</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-burnt-500 to-burnt-600 px-6 py-4 text-base font-semibold text-white shadow-warm transition-all hover:scale-[1.02] hover:shadow-glow disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <><Loader2 className="h-5 w-5 animate-spin" /> Sending Request…</>
                ) : (
                  'Confirm Reservation'
                )}
              </button>
              <p className="text-center text-xs text-cream-300/50">We'll confirm by email within an hour.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
