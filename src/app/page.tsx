import { productService } from "@/services";
import {
  brandIntroContent,
  whyMaamisValues,
  brandStoryContent,
  finalCtaContent,
} from "@/lib/landingContent";
import Hero from "@/components/home/Hero";
import BrandIntro from "@/components/home/BrandIntro";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyMaamis from "@/components/home/WhyMaamis";
import RecipeSection from "@/components/home/RecipeSection";
import BrandStory from "@/components/home/BrandStory";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  const featuredProducts = productService.listFeatured().slice(0, 3);

  return (
    <>
      <Hero />
      <BrandIntro
        imageSrc={brandIntroContent.imageSrc}
        imageAlt={brandIntroContent.imageAlt}
      />
      <FeaturedProducts products={featuredProducts} />
      <WhyMaamis values={whyMaamisValues} />
      <RecipeSection />
      <BrandStory
        imageSrc={brandStoryContent.imageSrc}
        imageAlt={brandStoryContent.imageAlt}
        title={brandStoryContent.title}
        description={brandStoryContent.description}
      />
      <FinalCTA
        title={finalCtaContent.title}
        description={finalCtaContent.description}
        ctaLabel={finalCtaContent.ctaLabel}
        ctaHref={finalCtaContent.ctaHref}
      />
    </>
  );
}
