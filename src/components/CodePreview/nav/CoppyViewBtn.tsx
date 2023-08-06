import clsx from "clsx";
import { ToolkitDisplayInterface } from "../ToolkitElementSection";
import Image from "next/image";
import clipboard from "../../../assets/icons/png/clipboard.png";
import success from "../../../assets/icons/png/success.png";
import css from "../../../assets/icons/png/css.png";
import html from "../../../assets/icons/png/html.png";
import preview from "../../../assets/icons/png/preview.png";
import script from "../../../assets/icons/png/script.png";

interface CoppyViewBtnProps {
  type: "copy" | "view" | "reverse" | "script" | "css" | "html";
  toolkitDisplay: ToolkitDisplayInterface;
  setToolkitDisplay: (arg: ToolkitDisplayInterface) => void;
}
export const CoppyViewBtn = ({
  type,
  toolkitDisplay,
  setToolkitDisplay,
}: CoppyViewBtnProps) => {
  const {
    isCssView,
    isHtmlView,
    isPreview,
    isReverse,
    isScriptView,
    isCopied,
  } = toolkitDisplay;

  const handleClipboard = () => {
    setToolkitDisplay({
      ...toolkitDisplay,
      isCopied: true,
    });
    setTimeout(() => {
      setToolkitDisplay({
        ...toolkitDisplay,
        isCopied: false,
      });
    }, 1500);
  };

  const handleViewModes = () => {
    if (type === "view") {
      setToolkitDisplay({
        ...toolkitDisplay,
        isPreview: true,
        isHtmlView: false,
        isCssView: false,
        isScriptView: false,
      });
    }
    if (type === "html") {
      setToolkitDisplay({
        ...toolkitDisplay,
        isPreview: false,
        isHtmlView: true,
        isCssView: false,
        isScriptView: false,
      });
    }
    if (type === "css") {
      setToolkitDisplay({
        ...toolkitDisplay,
        isPreview: false,
        isHtmlView: false,
        isCssView: true,
        isScriptView: false,
      });
    }
    if (type === "script") {
      setToolkitDisplay({
        ...toolkitDisplay,
        isPreview: false,
        isHtmlView: false,
        isCssView: false,
        isScriptView: true,
      });
    }
    if (type === "reverse") {
      setToolkitDisplay({
        ...toolkitDisplay,
        isReverse: !isReverse,
      });
    }
  };
  return (
    <>
      {type === "view" && (
        <button
          className={clsx(
            "font-light w-32 h-10 flex justify-center items-center gap-2 border-2 rounded-xl hover:bg-green-600 transition-all border-green-600 ",
            isPreview && "bg-green-600"
          )}
          onClick={handleViewModes}
        >
          <Image className='w-7 h-7 inline' src={preview} alt='preview' />
          Preview
        </button>
      )}
      {type === "html" && (
        <button
          className={clsx(
            "font-light w-32 h-10 flex justify-center items-center gap-2 border-2 rounded-xl hover:bg-green-600 transition-all border-green-600",
            isHtmlView && "bg-green-600"
          )}
          onClick={handleViewModes}
        >
          <Image className='w-7 h-7 inline' src={html} alt='html' />
          Html
        </button>
      )}
      {type === "css" && (
        <button
          className={clsx(
            "font-light w-32 h-10 flex justify-center items-center gap-2 border-2 rounded-xl hover:bg-green-600 transition-all border-green-600",
            isCssView && "bg-green-600"
          )}
          onClick={handleViewModes}
        >
          <Image className='w-7 h-7 inline' src={css} alt='css' />
          Css
        </button>
      )}
      {type === "copy" && (
        <button
          className={clsx(
            "font-light w-32 h-10 flex justify-center items-center gap-2 border-2 rounded-xl hover:bg-green-600 transition-all border-green-600"
          )}
          onClick={handleClipboard}
        >
          {!isCopied ? (
            <Image className='w-7 h-7 inline' src={clipboard} alt='clipboard' />
          ) : (
            <Image className='w-7 h-7 inline' src={success} alt='success' />
          )}
          {isCopied ? "Copied" : "Copy"}
        </button>
      )}
      {type === "script" && (
        <button
          className={clsx(
            "font-light w-32 h-10 flex justify-center items-center gap-2 border-2 rounded-xl hover:bg-green-600 transition-all border-green-600",
            isScriptView && "bg-green-600"
          )}
          onClick={handleViewModes}
        >
          <Image className='w-7 h-7 inline' src={script} alt='script' />
          Script
        </button>
      )}
    </>
  );
};
