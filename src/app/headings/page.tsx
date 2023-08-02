import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { heroSectionHeadingCss } from "@/db/css/headings/heroSectionHeading.css";
import { paragraphHeadingCss } from "@/db/css/headings/paragraphHeading.css";
import {
  heroSectionHeadingLg,
  heroSectionHeadingMd,
  heroSectionHeadingSm,
} from "@/db/html/headings/heroSectionHeading";
import {
  heroSectionHeadingAltLg,
  heroSectionHeadingAltMd,
  heroSectionHeadingAltSm,
} from "@/db/html/headings/heroSectionHeadingAlt";
import { paragraphInHeading } from "@/db/html/headings/paragraphInHeading";
import { PageLayout } from "@/layout/pageLayout";

const HeadingPage = () => {
  return (
    <PageLayout>
      <ToolkitElementSection
        language='javascript'
        htmlCode={heroSectionHeadingLg}
        cssCode={heroSectionHeadingCss}
        elementName='Hero section title'
        isVariant={true}
        variants={[
          heroSectionHeadingSm,
          heroSectionHeadingMd,
          heroSectionHeadingLg,
        ]}
      />

      <ToolkitElementSection
        language='javascript'
        cssCode={heroSectionHeadingCss}
        htmlCode={heroSectionHeadingAltLg}
        elementName='Hero section title Alternative'
        isVariant={true}
        variants={[
          heroSectionHeadingAltSm,
          heroSectionHeadingAltMd,
          heroSectionHeadingAltLg,
        ]}
      />

      <ToolkitElementSection
        language='javascript'
        cssCode={paragraphHeadingCss}
        htmlCode={paragraphInHeading}
        elementName='Undertitle in heading'
      />
    </PageLayout>
  );
};

export default HeadingPage;
