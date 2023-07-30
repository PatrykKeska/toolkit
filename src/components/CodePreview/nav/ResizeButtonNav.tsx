import clsx from "clsx";
import { PickedSize, Size } from "../ToolkitElementSection";

interface ResizeButtonNavProps {
  setSize: (arg: Size) => void;
  name: string;
  icon: string;
  size: Size;
  pickedSize: PickedSize;
  setPickedSize: (arg: any) => void;
}

export const ResizeButtonNav = ({
  setSize,
  name,
  icon,
  size,
  pickedSize,
  setPickedSize,
}: ResizeButtonNavProps) => {
  const handleClick = () => {
    setSize(size);
    setPickedSize(size);
  };

  return (
    <>
      <button
        className={clsx(
          "font-light w-32 h-10 grid place-items-center border-2 rounded-xl hover:bg-green-600 transition-all border-green-600",
          size.toString() === pickedSize.toString() && "bg-green-600"
        )}
        onClick={handleClick}
      >
        {icon} {name}
      </button>
    </>
  );
};
