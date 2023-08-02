import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { basicCounter } from "@/db/html/counters/basicCounter";
import { counter2 } from "@/db/html/counters/counter2";
import { basicCounterScript } from "@/db/js/basicCounter";
import { counterV2Script } from "@/db/js/counterv2Script";
import { PageLayout } from "@/layout/pageLayout";

interface CountersPageProps {}

const CountersPage = ({}: CountersPageProps) => {
  return (
    <PageLayout>
      <ToolkitElementSection
        language='javascript'
        isScript={true}
        scriptCode={basicCounterScript}
        htmlCode={basicCounter}
        elementName='Counter v1'
      />
      <ToolkitElementSection
        language='javascript'
        isScript={true}
        scriptCode={counterV2Script}
        htmlCode={counter2}
        elementName='Counter v2'
      />
    </PageLayout>
  );
};

export default CountersPage;
