import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { servicesSection } from "@/db/html/services-section/services";
import { PageLayout } from "@/layout/pageLayout";

const ServicesPage = () => {
  return (
    <PageLayout>
      <ToolkitElementSection
        textCode={servicesSection}
        elementName='Services Section'
        language='javascript'
      />
    </PageLayout>
  );
};

export default ServicesPage;
