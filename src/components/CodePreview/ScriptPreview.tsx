import { Transition } from "@headlessui/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface ScriptPreviewProps {
  isScriptView: boolean;
  script?: string;
}

export const ScriptPreview = ({ isScriptView, script }: ScriptPreviewProps) => {
  if (!script) return null;
  return (
    <>
      <div className='min-h-[800px] w-full mx-auto overflow-hidden'>
        <Transition
          show={isScriptView}
          enter='transition-opacity duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-3000'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <SyntaxHighlighter
            className='min-h-[800px] w-full mx-auto overflow-hidden'
            language='javascript'
            style={dracula}
          >
            {script}
          </SyntaxHighlighter>
        </Transition>
      </div>
    </>
  );
};
