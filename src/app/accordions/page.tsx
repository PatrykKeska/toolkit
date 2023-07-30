import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { accordion } from "@/db/html/accordions/accordion";
import { simpleAccordion } from "@/db/html/accordions/simpleAccordion";
import { accordionScript } from "@/db/js/accordionScript";
import { PageLayout } from "@/layout/pageLayout";

interface AccordionsPageProps {}

const AccordionsPage = ({}: AccordionsPageProps) => {
  return (
    <PageLayout>
      <ToolkitElementSection
        textCode={accordion}
        scriptCode={accordionScript}
        isScript={true}
        language='javascript'
        elementName='Accordion'
      />

      <ToolkitElementSection
        textCode={simpleAccordion}
        language='javascript'
        elementName='Accordion Only HTML & CSS'
      />
    </PageLayout>
  );
};

export default AccordionsPage;
