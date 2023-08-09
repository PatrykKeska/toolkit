import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { TabsSchemaCss } from "@/db/css/Tabs/TabsSchema.css";
import { OnlyTabsSchemaHtml } from "@/db/html/tabs/OnlyTabsSchema.html";
import { TabsSchemaHtml } from "@/db/html/tabs/TabsSchema.html";
import { TabsSchemaScript } from "@/db/js/TabsSchema.script";
import { PageLayout } from "@/layout/pageLayout";

const TabsPage = () => {
  return (
    <PageLayout>
      <ToolkitElementSection
        htmlCode={TabsSchemaHtml}
        cssCode={TabsSchemaCss}
        scriptCode={TabsSchemaScript}
        isScript={true}
        language='javascript'
        elementName='Tabs'
      />

      <ToolkitElementSection
        htmlCode={OnlyTabsSchemaHtml}
        cssCode={TabsSchemaCss}
        scriptCode={TabsSchemaScript}
        isScript={true}
        language='javascript'
        elementName='Tabs No Content'
      />
    </PageLayout>
  );
};

export default TabsPage;
