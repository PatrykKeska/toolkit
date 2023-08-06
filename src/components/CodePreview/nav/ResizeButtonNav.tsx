import clsx from "clsx";
import { Size, ToolkitDisplayInterface } from "../ToolkitElementSection";
import { StaticImageData } from "next/image";
import Image from "next/image";
interface ResizeButtonNavProps {
  name: string;
  icon: StaticImageData;
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
          "font-light w-32 h-10 flex justify-center items-center gap-2 border-2 rounded-xl hover:bg-green-600 transition-all border-green-600",
          size === toolkitDisplay.size && "bg-green-600"
        )}
        onClick={handleClick}
      >
        <Image className='w-7 h-7 inline' src={icon} alt={name} />
        {name}
      </button>
    </>
  );
};
