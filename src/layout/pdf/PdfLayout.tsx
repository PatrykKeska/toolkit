import { Checklist } from "@/components/Checklist/CheckList";
import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { PdfPreviewCss } from "@/db/css/PdfPreview/PdfPreview.css";
import { PdfPreviewHtml } from "@/db/html/pdf/PdfPreviewHtml";

export const PdfLayout = () => {
  return (
    <>
      <Checklist
        title="Requirments"
        items={[
          { text: "Additional Css Added" },
          { text: "Strapi Full Width Mode" },
          {
            text: "Script Field Class Name Added",
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
