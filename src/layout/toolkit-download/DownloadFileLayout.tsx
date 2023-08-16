import { DownloadToolkitButton } from "@/components/DownloadToolkitFile";
import { CodeBlock } from "@/components/code/codeBlock";

export const DownloadFileLayout = () => {
  return (
    <section className="mb-5 flex flex-col p-4">
      <DownloadToolkitButton />
      <CodeBlock text={`<link rel="stylesheet" href="Strapi Link to File">`} />
    </section>
  );
};
