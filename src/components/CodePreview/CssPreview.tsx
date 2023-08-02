import { Transition } from "@headlessui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ToolkitDisplayInterface } from "./ToolkitElementSection";
import { useCopyToClipboard } from "@/hooks/useCoppyToClipboard";

interface CssPreviewProps {
  isCssPreview: boolean;
  cssCode?: string;
  toolkitDisplay: ToolkitDisplayInterface;
  setToolkitDisplay: (arg: ToolkitDisplayInterface) => void;
}

export const CssPreveiw = ({
  isCssPreview,
  cssCode,
  setToolkitDisplay,
  toolkitDisplay,
}: CssPreviewProps) => {
  const { isCopied } = toolkitDisplay;
  useCopyToClipboard(isCopied, toolkitDisplay, setToolkitDisplay, cssCode);

  return (
    <>
      <div className='min-h-[800px] w-full mx-auto overflow-hidden'>
        <Transition
          show={isCssPreview}
          enter='transition-opacity duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-3000'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          {cssCode && (
            <SyntaxHighlighter
              className='min-h-[800px] w-full mx-auto overflow-hidden'
              language='css'
              style={arta}
            >
              {cssCode}
            </SyntaxHighlighter>
          )}
        </Transition>
      </div>
    </>
  );
};
