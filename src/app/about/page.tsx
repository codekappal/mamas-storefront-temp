import {
  aboutHeaderContent,
  aboutIntroContent,
  aboutValues,
  aboutProcess,
} from "@/lib/aboutContent";
import AboutHeader from "@/components/about/AboutHeader";
import AboutIntro from "@/components/about/AboutIntro";
import ValuesSection from "@/components/about/ValuesSection";
import ProcessSection from "@/components/about/ProcessSection";

export default function AboutPage() {
  return (
    <div className="bg-neutral-100 min-h-screen">
      <AboutHeader
        eyebrow={aboutHeaderContent.eyebrow}
        title={aboutHeaderContent.title}
        subtitle={aboutHeaderContent.subtitle}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
        <AboutIntro
          title={aboutIntroContent.title}
          paragraphs={aboutIntroContent.paragraphs}
        />
        <ValuesSection title="Our Values" values={aboutValues} />
        <ProcessSection title="Our Process" steps={aboutProcess} />
      </div>
    </div>
  );
}
