import type { ContentTab } from "@/lib/types";
import ContentToggle from "@/components/content/ContentToggle";

interface ContentHeaderSectionProps {
  activeTab: ContentTab;
  onSelectTab: (tab: ContentTab) => void;
}

export default function ContentHeaderSection({
  activeTab,
  onSelectTab,
}: ContentHeaderSectionProps) {
  return (
    <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <p className="text-primary-200 font-semibold text-sm uppercase tracking-wider mb-2">
          Maamis Journal
        </p>
        <h1 className="text-[32px] sm:text-[40px] font-bold mb-10">Recipes &amp; Stories</h1>
        <p className="text-primary-100 max-w-2xl text-[22px] sm:text-[28px] font-normal leading-[1.35]">
          Discover authentic recipes crafted with our masalas, and read stories
          from the world of Indian spices.
        </p>
        <ContentToggle activeTab={activeTab} onSelect={onSelectTab} />
      </div>
    </section>
  );
}
