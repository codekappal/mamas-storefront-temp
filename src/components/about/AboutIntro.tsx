interface AboutIntroProps {
  title: string;
  paragraphs: string[];
}

export default function AboutIntro({ title, paragraphs }: AboutIntroProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-neutral-900 mb-4">{title}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 32)} className="text-neutral-600 leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
    </section>
  );
}
