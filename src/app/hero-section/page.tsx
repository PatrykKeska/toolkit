import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import {
  basicHeroSection,
  heroSectionWithButton,
} from "@/db/html/hero-section/basicHeroSection";
import { PageLayout } from "@/layout/pageLayout";

interface HeroSectionPageProps {}

const HeroSectionPage = ({}: HeroSectionPageProps) => {
  return (
    <PageLayout>
      <ToolkitElementSection
        language='javascript'
        textCode={basicHeroSection}
        elementName='Hero section'
      />

      <ToolkitElementSection
        language='javascript'
        textCode={heroSectionWithButton}
        elementName='Hero section with Button'
      />
    </PageLayout>
  );
};

export default HeroSectionPage;
