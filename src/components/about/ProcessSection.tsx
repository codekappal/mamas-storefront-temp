interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  title: string;
  steps: ProcessStep[];
}

export default function ProcessSection({ title, steps }: ProcessSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-neutral-900 mb-4">{title}</h2>
      <div className="space-y-4">
        {steps.map((step) => (
          <ProcessStepCard key={step.step} step={step} />
        ))}
      </div>
    </section>
  );
}

function ProcessStepCard({ step }: { step: ProcessStep }) {
  return (
    <div className="flex gap-4 bg-white rounded-2xl shadow-sm p-5">
      <span className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
        {step.step}
      </span>
      <div>
        <h3 className="font-semibold text-neutral-900">{step.title}</h3>
        <p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}
