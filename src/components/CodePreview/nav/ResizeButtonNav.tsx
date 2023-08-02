import clsx from "clsx";
import { Size, ToolkitDisplayInterface } from "../ToolkitElementSection";

interface ResizeButtonNavProps {
  name: string;
  icon: string;
  toolkitDisplay: ToolkitDisplayInterface;
  setToolkitDisplay: (arg: ToolkitDisplayInterface) => void;
  size: Size;
}

export const ResizeButtonNav = ({
  name,
  icon,
  setToolkitDisplay,
  toolkitDisplay,
  size,
}: ResizeButtonNavProps) => {
  const handleClick = () => {
    setToolkitDisplay({
      ...toolkitDisplay,
      size,
    });
  };

  return (
    <>
      <button
        className={clsx(
          "font-light w-32 h-10 grid place-items-center border-2 rounded-xl hover:bg-green-600 transition-all border-green-600",
          size === toolkitDisplay.size && "bg-green-600"
        )}
        onClick={handleClick}
      >
        {icon} {name}
      </button>
    </>
  );
};
