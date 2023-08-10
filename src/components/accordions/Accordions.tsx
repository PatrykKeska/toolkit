import clsx from "clsx";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface AccordionsProps {
  modifier: boolean;
  setModifier: (arg: boolean) => void;
  children?: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
  btnText?: string;
  code?: string | undefined;
  leannguage?: "javascript" | "html" | "css";
}

export const Accordions = ({
  modifier,
  setModifier,
  children,
  btnText,
  code,
  leannguage,
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
      <section className=' mx-auto w-full'>
        <span
          onClick={handleAccordion}
          className={clsx(
            `max-w-4xl mx-auto flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gradient-to-r from-slate-900 from-25% via-blue-900 via-65% to-fuchsia-800 to-90% hover:bg-pos-100 bg-pos-0 bg-size-200 transition-all duration-500 p-4 font-bold text-lg mb-5 capitalize`,
            open &&
              "bg-pos-100 bg-size-200 bg-gradient-to-rfrom-slate-900 from-25% via-blue-900 via-65% to-fuchsia-800 to-90%"
          )}
        >
          {btnText ? btnText : "Click to open"}
        </span>
        <div
          className={clsx(
            `grid grid-rows-[0fr] overflow-hidden transition-all`,
            open && "grid-rows-[1fr]"
          )}
        >
          <div className='overflow-hidden flex justify-center items-center max-w-4xl flex-col mx-auto px-10 w-full'>
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
                className='min-h-[800px] w-full mx-auto overflow-hidden mb-16'
                language={leannguage ? leannguage : "javascript"}
                style={a11yDark}
              >
                {code}
              </SyntaxHighlighter>
            ) : (
              <article className='py-10'>{children}</article>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
