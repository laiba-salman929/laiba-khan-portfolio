import FadeIn from "./FadeIn";

export default function SectionHeading({
  index,
  title,
  eyebrow,
}: {
  index: string;
  title: string;
  eyebrow?: string;
}) {
  return (
    <FadeIn className="relative mb-12 flex items-end justify-between gap-6 border-b border-border pb-5">
      <span
        aria-hidden
        className="pointer-events-none absolute -top-10 -left-2 -z-10 select-none text-[7rem] leading-none font-bold text-accent/[0.06] sm:text-[9rem]"
      >
        {index}
      </span>
      <div>
        {eyebrow && (
          <p className="mb-2 font-mono text-xs tracking-[0.25em] text-accent uppercase">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-4xl font-normal tracking-tight text-foreground sm:text-5xl">
          {title}
        </h2>
      </div>
      <span className="font-mono text-sm text-muted">{index}</span>
    </FadeIn>
  );
}
