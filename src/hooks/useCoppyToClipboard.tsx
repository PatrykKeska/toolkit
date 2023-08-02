import { ToolkitDisplayInterface } from "@/components/CodePreview/ToolkitElementSection";
import { useEffect } from "react";

export const useCopyToClipboard = (
  isCopied: boolean,
  toolkitDisplay: ToolkitDisplayInterface,
  setToolkitDisplay: (arg: ToolkitDisplayInterface) => void,
  code?: string,
  variant?: string
) => {
  useEffect(() => {
    if (!isCopied) return;
    if (variant) {
      navigator.clipboard.writeText(variant);
    } else if (code) {
      navigator.clipboard.writeText(code);
    }
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
  }, [isCopied]);
};
