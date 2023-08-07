import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { PdfPreviewCss } from "@/db/css/PdfPreview/PdfPreview.css";
import { PdfPreviewHtml } from "@/db/html/pdf/PdfPreviewHtml";
import { PageLayout } from "@/layout/pageLayout";

const PdfPage = () => {
  return (
    <PageLayout>
      <ToolkitElementSection
        htmlCode={PdfPreviewHtml}
        cssCode={PdfPreviewCss}
        language='javascript'
        cssRequired
        elementName='Pdf Preview'
        fullWidthRequired
      />
    </PageLayout>
  );
};

export default PdfPage;
