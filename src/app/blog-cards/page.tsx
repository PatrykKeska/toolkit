import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { blogCard } from "@/db/html/blog-cards/blogCard";
import { PageLayout } from "@/layout/pageLayout";

const BlogCardsPage = () => {
  return (
    <PageLayout>
      <ToolkitElementSection
        language='javascript'
        textCode={blogCard}
        elementName='Blog Card'
      />
    </PageLayout>
  );
};

export default BlogCardsPage;
