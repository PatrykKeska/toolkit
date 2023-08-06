import { CodeBlock } from "@/components/code/codeBlock";
import Tabs from "@/components/tabs/Tabs";
import { PageLayout } from "@/layout/pageLayout";

const CarouselsPage = () => {
  return (
    <PageLayout>
      <article className='flex flex-col justify-center items-center'>
        <h2 className='text-3xl my-3 font-bold'>
          There are two types of carousels to use:
        </h2>
        <div className='my-2'>
          <CodeBlock gray text='Recommended Offers' />
          and <CodeBlock gray text=' Carousel Boxes' />
        </div>{" "}
        <p className='text-md text-red-500'>
          There are some differences between them, so follow this guide to
          choose the appropriate classes.
        </p>
      </article>
      <Tabs />

      {/* <ToolkitElementSection
        htmlCode={recommendedOffersTitle}
        cssCode={carouselsCss}
        language='javascript'
        elementName='Recommended offers'
      /> */}
    </PageLayout>
  );
};

export default CarouselsPage;
