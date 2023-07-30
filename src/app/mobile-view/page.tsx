"use client";
import { PageLayout } from "@/layout/pageLayout";
import Image from "next/image";
import img from "../../assets/img/strapiScriptField.jpg";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";

const textCode = `
/* Mobile view full width start */

.static-lp-main-wrapper {
  margin: 1rem auto 1rem auto;
  max-width: 1180px;
}

.static-lp-main-wrapper > .container {
  padding-left: 0 !important;
  padding-right: 0 !important;
  /* remove if background no needed */
  background-color: var(--main-theme-color) !important;
}

.static-lp-main-wrapper * {
  box-sizing: border-box;
}

/* Mobile view full end */
`;

const MobileViewPage = () => {
  return (
    <PageLayout>
      <h1 className='text-3xl text-center font-bold text-slate-100'>
        How to get full mobile width on mobile devices with no paddigns:
      </h1>
      <details>
        <summary>
          <span className='text-green-500 text-xl font-bold'>
            1. Get the Toolkit.css file or...
          </span>
        </summary>
        <p className='my-4'>
          If you have already included Toolkit.css, otherwise you can copy the
          utility classNamees from it. Make sure to update the background color
          if you are not using the root variables from toolkit.css.
        </p>
        <SyntaxHighlighter language='css' style={arta}>
          {textCode}
        </SyntaxHighlighter>
      </details>

      <details>
        <summary>
          <span className='text-green-500 text-xl font-bold my-5'>
            2. Go to strapi
          </span>
        </summary>
        <p className='my-4'>
          Now in Strapi go to your static page and add the className
          <strong className='text-green-500'> static-lp-main-wrapper</strong> in
          the script field
        </p>
        <Image width={800} height={500} src={img} alt='Strapi script field' />
      </details>
    </PageLayout>
  );
};

export default MobileViewPage;
