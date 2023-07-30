import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
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
import { PageLayout } from "@/layout/pageLayout";

const HeadingPage = () => {
  return (
    <PageLayout>
      <ToolkitElementSection
        language='javascript'
        textCode={heroSectionHeadingLg}
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
        textCode={heroSectionHeadingAltLg}
        elementName='Hero section title Alternative'
        isVariant={true}
        variants={[
          heroSectionHeadingAltSm,
          heroSectionHeadingAltMd,
          heroSectionHeadingAltLg,
        ]}
      />
    </PageLayout>
  );
};

export default HeadingPage;
