import clsx from "clsx";
import { ToolkitDisplayInterface } from "../ToolkitElementSection";

interface ReverseNavButtonProps {
  toolkitDisplay: ToolkitDisplayInterface;
  setToolkitDisplay: (arg: ToolkitDisplayInterface) => void;
}

export const ReverseNavButton = ({
  toolkitDisplay,
  setToolkitDisplay,
}: ReverseNavButtonProps) => {
  const { isReverse } = toolkitDisplay;
  const handleClick = () => {
    setToolkitDisplay({
      ...toolkitDisplay,
      isReverse: !isReverse,
    });
  };
  return (
    <>
      <button
        className={clsx(
          "font-light w-32 h-10 grid place-items-center border-2 rounded-xl hover:bg-green-600 transition-all border-green-600",
          isReverse && "bg-green-600"
        )}
        onClick={handleClick}
      >
        🔄 Reverse
      </button>
    </>
  );
};
