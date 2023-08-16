import { Checklist } from "@/components/Checklist/CheckList";
import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { PdfPreviewCss } from "@/db/css/PdfPreview/PdfPreview.css";
import { PdfPreviewHtml } from "@/db/html/pdf/PdfPreviewHtml";

export const PdfLayout = () => {
  return (
    <>
      <Checklist
        title="Requirments to use Pdf Preview"
        items={[
          { text: "Add Css from below" },
          { text: "Set Full Width toggle in Strapi" },
          {
            text: "Set class name in Strapi at the script field",
            code: "main-lp-wrapper",
          },
        ]}
      />

      <ToolkitElementSection
        htmlCode={PdfPreviewHtml}
        cssCode={PdfPreviewCss}
        language="javascript"
        cssRequired
        elementName="Pdf Preview"
        fullWidthRequired
      />
    </>
  );
};
