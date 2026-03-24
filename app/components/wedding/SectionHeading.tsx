type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  text?: string;
};

export function SectionHeading({ eyebrow, title, text }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs uppercase tracking-[0.4em] text-amber-200/80">{eyebrow}</p>
      <h2 className="text-3xl font-light tracking-tight text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-sm leading-7 text-white/70 md:text-base">{text}</p> : null}
    </div>
  );
}