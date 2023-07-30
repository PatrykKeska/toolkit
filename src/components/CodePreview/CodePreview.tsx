import { Transition } from "@headlessui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate, arta } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodePreviewProps {
  isView: boolean;
  textCode: string | undefined;
  language: "javascript" | "css";
  variant?: string;
}

export const CodePreview = ({
  isView,
  textCode,
  language,
  variant,
}: CodePreviewProps) => {
  if (!textCode) return null;
  return (
    <>
      <div className='min-h-[800px] w-full mx-auto overflow-hidden'>
        <Transition
          show={isView}
          enter='transition-opacity duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-3000'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <SyntaxHighlighter
            className='min-h-[800px] w-full mx-auto overflow-hidden'
            language={language}
            style={language === "javascript" ? agate : arta}
          >
            {variant ? variant : textCode}
          </SyntaxHighlighter>
        </Transition>
      </div>
    </>
  );
};
