import clsx from "clsx";
import { ToolkitDisplayInterface } from "../ToolkitElementSection";

interface CoppyViewBtnProps {
  type: "coppy" | "view" | "reverse" | "script" | "css" | "html";
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
            "font-light w-32 h-10 grid place-items-center border-2 rounded-xl hover:bg-green-600 transition-all border-green-600",
            isPreview && "bg-green-600"
          )}
          onClick={handleViewModes}
        >
          👀 Preview
        </button>
      )}
      {type === "html" && (
        <button
          className={clsx(
            "font-light w-32 h-10 grid place-items-center border-2 rounded-xl hover:bg-green-600 transition-all border-green-600",
            isHtmlView && "bg-green-600"
          )}
          onClick={handleViewModes}
        >
          🏗️ Html
        </button>
      )}
      {type === "css" && (
        <button
          className={clsx(
            "font-light w-32 h-10 grid place-items-center border-2 rounded-xl hover:bg-green-600 transition-all border-green-600",
            isCssView && "bg-green-600"
          )}
          onClick={handleViewModes}
        >
          🎨 Css
        </button>
      )}
      {type === "coppy" && (
        <button
          className={clsx(
            "font-light w-32 h-10 grid place-items-center border-2 rounded-xl hover:bg-green-600 transition-all border-green-600"
          )}
          onClick={handleClipboard}
        >
          {isCopied ? "🎉 Coppied" : "📋 Coppy"}
        </button>
      )}
      {type === "script" && (
        <button
          className={clsx(
            "font-light w-32 h-10 grid place-items-center border-2 rounded-xl hover:bg-green-600 transition-all border-green-600",
            isScriptView && "bg-green-600"
          )}
          onClick={handleViewModes}
        >
          📜 Script
        </button>
      )}
    </>
  );
};
