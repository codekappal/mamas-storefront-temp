import type { Benefit } from "@/lib/types";
import { Leaf, Sun, Flame, Soup } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap = {
  leaf: Leaf,
  sun: Sun,
  flame: Flame,
  soup: Soup,
} as const;

function ValueIcon({ icon }: { icon: string }) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? Leaf;
  return <Icon className="h-8 w-8 text-accent-600" aria-hidden />;
}

interface WhyMaamisProps {
  values: Benefit[];
}

export default function WhyMaamis({ values }: WhyMaamisProps) {
  return (
    <section className="bg-neutral-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          title="Crafted around flavour"
          align="center"
          description="Every jar reflects our commitment to authentic, carefully prepared spices you can taste."
        />
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-neutral-200 bg-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="bg-white p-8">
              <ValueIcon icon={value.icon} />
              <h3 className="mt-4 font-serif text-lg text-neutral-900">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
