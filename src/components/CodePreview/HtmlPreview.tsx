import { Transition } from "@headlessui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { agate, arta } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ToolkitDisplayInterface } from "./ToolkitElementSection";
import { useCopyToClipboard } from "@/hooks/useCoppyToClipboard";

interface CodePreviewProps {
  isHtmlView?: boolean;
  htmlCode?: string | undefined;
  language: "javascript" | "css";
  variant?: string;
  toolkitDisplay: ToolkitDisplayInterface;
  setToolkitDisplay: (arg: ToolkitDisplayInterface) => void;
}

export const HtmlPreview = ({
  isHtmlView,
  htmlCode,
  language,
  variant,
  toolkitDisplay,
  setToolkitDisplay,
}: CodePreviewProps) => {
  const { isCopied } = toolkitDisplay;
  useCopyToClipboard(
    isCopied,
    toolkitDisplay,
    setToolkitDisplay,
    htmlCode,
    variant
  );
  if (!htmlCode) return null;

  return (
    <>
      <div className='min-h-[800px] w-full mx-auto overflow-hidden'>
        <Transition
          show={isHtmlView}
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
            {variant ? variant : htmlCode}
          </SyntaxHighlighter>
        </Transition>
      </div>
    </>
  );
};
