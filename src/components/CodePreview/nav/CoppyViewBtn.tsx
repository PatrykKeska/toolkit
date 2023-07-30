"use client";

import clsx from "clsx";
import { useState } from "react";

interface CoppyViewBtnProps {
  text: string | undefined;
  type: "coppy" | "view" | "reverse" | "script";
  isView: boolean;
  setIsView: (arg: boolean) => void;
  isScriptView?: boolean;
  setIsScriptView?: (arg: boolean) => void;
}
export const CoppyViewBtn = ({
  text,
  type,
  isView,
  setIsView,
  isScriptView,
  setIsScriptView,
}: CoppyViewBtnProps) => {
  const [isCoppied, setIsCopied] = useState(false);

  const handleClipboard = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const handleViewModes = () => {
    if (type === "view") {
      setIsView(!isView);
      setIsScriptView && setIsScriptView(false);
    } else if (type === "script") {
      setIsView(false);
      setIsScriptView && setIsScriptView(!isScriptView);
    }
  };
  return (
    <>
      {type === "view" && (
        <button
          className={clsx(
            "font-light w-32 h-10 grid place-items-center border-2 rounded-xl hover:bg-green-600 transition-all border-green-600",
            isView && "bg-green-600"
          )}
          onClick={handleViewModes}
        >
          👀 View
        </button>
      )}
      {type === "coppy" && (
        <button
          className={clsx(
            "font-light w-32 h-10 grid place-items-center border-2 rounded-xl hover:bg-green-600 transition-all border-green-600"
          )}
          onClick={handleClipboard}
        >
          {isCoppied ? "🎉 Coppied" : "📋 Coppy"}
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
