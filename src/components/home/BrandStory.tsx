import Image from "next/image";
import type { ProcessStep } from "@/lib/aboutContent";
import { aboutProcess } from "@/lib/aboutContent";
import SectionHeading from "@/components/ui/SectionHeading";

interface BrandStoryProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export default function BrandStory({
  imageSrc,
  imageAlt,
  title,
  description,
}: BrandStoryProps) {
  return (
    <section className="bg-primary-950 text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[640px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-16 lg:py-24">
          <SectionHeading
            title={title}
            className="[&_h2]:text-white [&>p]:text-primary-100/80 [&_p]:text-accent-500"
          />
          <p className="mt-6 text-base leading-relaxed text-primary-100/80">
            {description}
          </p>

          <ol className="mt-12 space-y-8">
            {aboutProcess.map((step: ProcessStep) => (
              <li key={step.step} className="flex gap-5">
                <span className="font-serif text-2xl leading-none text-accent-500">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-serif text-lg text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-primary-200/70">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
