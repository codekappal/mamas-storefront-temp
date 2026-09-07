import type { Benefit } from "@/lib/types";

interface ValuesSectionProps {
  title: string;
  values: Benefit[];
}

export default function ValuesSection({ title, values }: ValuesSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-neutral-900 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((value) => (
          <ValueCard key={value.title} value={value} />
        ))}
      </div>
    </section>
  );
}

function ValueCard({ value }: { value: Benefit }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
      <p className="text-4xl mb-3">{value.icon}</p>
      <h3 className="font-semibold text-neutral-900 mb-2">{value.title}</h3>
      <p className="text-sm text-neutral-500 leading-relaxed">{value.description}</p>
    </div>
  );
}
