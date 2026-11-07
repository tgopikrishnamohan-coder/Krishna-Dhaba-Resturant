type Props = {
  eyebrow: string;
  title: string;
  highlight?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({ eyebrow, title, highlight, align = 'center' }: Props) {
  return (
    <div className={`flex flex-col gap-3 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`}>
      <span className="flex items-center gap-3 text-golden-400">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-golden-400" />
        <span className="text-xs font-semibold uppercase tracking-[0.35em]">{eyebrow}</span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-golden-400" />
      </span>
      <h2 className="max-w-2xl text-4xl font-bold leading-tight text-cream-50 sm:text-5xl">
        {title} {highlight && <span className="text-gradient-gold italic">{highlight}</span>}
      </h2>
    </div>
  );
}
