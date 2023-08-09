import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { NewsSchemaCss } from "@/db/css/news/newsSchema.css";
import { NewsSchemaHtml } from "@/db/html/news/newsSchema.html";
import { NewsSchemaScript } from "@/db/js/NewsSchema.script";
import { PageLayout } from "@/layout/pageLayout";

const NewsPage = () => {
  return (
    <PageLayout>
      <ToolkitElementSection
        htmlCode={NewsSchemaHtml}
        cssCode={NewsSchemaCss}
        isScript
        scriptCode={NewsSchemaScript}
        cssRequired
        language='javascript'
      />
    </PageLayout>
  );
};

export default NewsPage;
