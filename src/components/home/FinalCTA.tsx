import Link from "next/link";
import Container from "@/components/ui/Container";

interface FinalCTAProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function FinalCTA({
  title,
  description,
  ctaLabel,
  ctaHref,
}: FinalCTAProps) {
  return (
    <section className="bg-accent-700 text-white">
      <Container className="py-20 text-center sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-warm-200">
          Maamis
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85">
          {description}
        </p>
        <div className="mt-9">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary-900 transition-colors hover:bg-cream"
          >
            {ctaLabel}
            <span aria-hidden>→</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
