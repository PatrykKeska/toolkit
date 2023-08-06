import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { accordionCss } from "@/db/css/accordions/accordion.css";
import { simpleAccordionCss } from "@/db/css/accordions/simpleAccordion.css";
import { accordion } from "@/db/html/accordions/accordion";
import { simpleAccordion } from "@/db/html/accordions/simpleAccordion";
import { accordionScript } from "@/db/js/accordionScript";
import { PageLayout } from "@/layout/pageLayout";

interface AccordionsPageProps {}

const AccordionsPage = ({}: AccordionsPageProps) => {
  return (
    <PageLayout>
      <ToolkitElementSection
        htmlCode={accordion}
        scriptCode={accordionScript}
        isScript={true}
        language='javascript'
        elementName='Accordion'
        cssCode={accordionCss}
      />

      <ToolkitElementSection
        htmlCode={simpleAccordion}
        language='javascript'
        elementName='Accordion Only HTML & CSS'
        cssCode={simpleAccordionCss}
      />
    </PageLayout>
  );
};

export default AccordionsPage;
