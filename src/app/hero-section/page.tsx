import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { basicHeroSectionCss } from "@/db/css/HeroSection/basicHeroSection.css";
import { heroSectionWithButtonCss } from "@/db/css/HeroSection/heroSectionWithButton.css";
import { heroSectionWithButtonAndServicesCss } from "@/db/css/HeroSection/heroSectionWithButtonAndServices.css";
import {
  basicHeroSection,
  heroSectionWithButton,
  heroSectionWithButtonAndServices,
} from "@/db/html/hero-section/basicHeroSection";
import { PageLayout } from "@/layout/pageLayout";

const HeroSectionPage = () => {
  return (
    <PageLayout>
      <ToolkitElementSection
        language='javascript'
        htmlCode={basicHeroSection}
        elementName='Hero section'
        cssCode={basicHeroSectionCss}
      />

      <ToolkitElementSection
        language='javascript'
        htmlCode={heroSectionWithButton}
        cssCode={heroSectionWithButtonCss}
        elementName='Hero section with Button'
      />

      <ToolkitElementSection
        language='javascript'
        htmlCode={heroSectionWithButtonAndServices}
        cssCode={heroSectionWithButtonAndServicesCss}
        elementName='Hero section with button and Services'
      />
    </PageLayout>
  );
};

export default HeroSectionPage;
