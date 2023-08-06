import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { counterV1Css } from "@/db/css/counters/counterv1.css";
import { counterV2css } from "@/db/css/counters/counterv2.css";
import { basicCounter } from "@/db/html/counters/basicCounter";
import { counter2 } from "@/db/html/counters/counter2";
import { basicCounterScript } from "@/db/js/basicCounter";
import { counterV2Script } from "@/db/js/counterv2Script";
import { PageLayout } from "@/layout/pageLayout";

const CountersPage = () => {
  return (
    <PageLayout>
      <ToolkitElementSection
        language='javascript'
        isScript={true}
        scriptCode={basicCounterScript}
        htmlCode={basicCounter}
        elementName='Counter v1'
        cssCode={counterV1Css}
        cssRequired
      />
      <ToolkitElementSection
        language='javascript'
        isScript={true}
        scriptCode={counterV2Script}
        htmlCode={counter2}
        elementName='Counter v2'
        cssCode={counterV2css}
        cssRequired
      />
    </PageLayout>
  );
};

export default CountersPage;
