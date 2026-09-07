interface AboutHeaderProps {
  title: string;
  subtitle: string;
  eyebrow: string;
}

export default function AboutHeader({
  title,
  subtitle,
  eyebrow,
}: AboutHeaderProps) {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-primary-950 text-white">
      <BackgroundVideo />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-950/70 via-transparent to-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cream">
          {eyebrow}
        </p>
        <h1 className="mb-10 max-w-3xl font-bold text-[32px] leading-[1.15] sm:text-[40px]">
          {title}
        </h1>
        <p className="max-w-2xl text-[22px] sm:text-[28px] font-normal leading-[1.35] text-primary-100">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

function BackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
      tabIndex={-1}
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src="/video/1000142567.mp4" type="video/mp4" />
    </video>
  );
}
