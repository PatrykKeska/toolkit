import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { blogCardsCss } from "@/db/css/blogCards/blogCards.css";
import { blogCard } from "@/db/html/blog-cards/blogCard";
import { PageLayout } from "@/layout/pageLayout";

const BlogCardsPage = () => {
  return (
    <PageLayout>
      <ToolkitElementSection
        language='javascript'
        htmlCode={blogCard}
        cssCode={blogCardsCss}
        elementName='Blog Card'
      />
    </PageLayout>
  );
};

export default BlogCardsPage;
