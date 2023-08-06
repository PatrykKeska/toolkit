import clsx from "clsx";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface AccordionsProps {
  modifier: boolean;
  setModifier: (arg: boolean) => void;
  children?: React.ReactNode | React.ReactNode[];
  btnText?: string;
  code?: string | undefined;
}

export const Accordions = ({
  modifier,
  setModifier,
  children,
  btnText,
  code,
}: AccordionsProps) => {
  const [open, setOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleAccordion = () => {
    setOpen(!modifier);
    setModifier(!modifier);
  };

  const handleClipboard = () => {
    code && navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <>
      <section>
        <span
          onClick={handleAccordion}
          className='w-full flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900 dark:bg-gray-900 dark:text-white font-bold text-lg mb-5 hover:shadow-2xl transition hover:shadow-cyan-700/50 '
        >
          {btnText ? btnText : "Click to open"}
        </span>
        <div
          className={clsx(
            `grid grid-rows-[0fr] overflow-hidden transition-all`,
            open && "grid-rows-[1fr]"
          )}
        >
          <div className='overflow-hidden'>
            {code && (
              <button
                className='inline-block rounded bg-green-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-700 ml-5 mt-5 mb-6'
                onClick={handleClipboard}
              >
                {!isCopied ? "Copy File to Clipboard" : "Copied 🎉"}
              </button>
            )}

            {code ? (
              <SyntaxHighlighter
                className='min-h-[800px] w-full mx-auto overflow-hidden'
                language='css'
                style={arta}
              >
                {code}
              </SyntaxHighlighter>
            ) : (
              children
            )}
          </div>
        </div>
      </section>
    </>
  );
};
