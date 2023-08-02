import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { servicesCss } from "@/db/css/services/services.css";
import { servicesSection } from "@/db/html/services-section/services";
import { PageLayout } from "@/layout/pageLayout";

const ServicesPage = () => {
  return (
    <PageLayout>
      <ToolkitElementSection
        htmlCode={servicesSection}
        cssCode={servicesCss}
        elementName='Services Section'
        language='javascript'
      />
    </PageLayout>
  );
};

export default ServicesPage;
