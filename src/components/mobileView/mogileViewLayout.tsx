"use client";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";
import img from "../../assets/img/strapiScriptField.jpg";
import { useState } from "react";
import { Accordions } from "../accordions/Accordions";
import { MobileViewCss } from "@/db/css/mobileView/MobileView.css";

export const MobileViewLayout = () => {
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);

  return (
    <>
      <h1 className='text-3xl mt-10 mb-3 text-center font-bold text-green-400'>
        How to get full mobile width on mobile devices with no paddigns:
      </h1>
      <Accordions
        btnText='1. Get the Toolkit.css file or...'
        setModifier={setStep1}
        modifier={step1}
      >
        <p className='my-4'>
          If you have already included Toolkit.css, otherwise you can copy the
          utility classNamees from it. Make sure to update the background color
          if you are not using the root variables from toolkit.css.
        </p>
        <SyntaxHighlighter language='css' style={arta}>
          {MobileViewCss}
        </SyntaxHighlighter>
      </Accordions>

      <Accordions
        btnText='2. Go to strapi'
        setModifier={setStep2}
        modifier={step2}
      >
        <p className='my-4'>
          Now in Strapi go to your static page and add the className
          <strong className='text-green-500'> static-lp-main-wrapper</strong> in
          the script field
        </p>
        <Image width={800} height={500} src={img} alt='Strapi script field' />
      </Accordions>
    </>
  );
};
