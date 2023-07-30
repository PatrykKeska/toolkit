import clsx from "clsx";

interface ReverseNavButtonProps {
  showReverseButton: boolean | undefined;
  setIsReverse: ((arg: boolean) => void) | undefined;
  isReverse: boolean | undefined;
}

export const ReverseNavButton = ({
  showReverseButton,
  setIsReverse,
  isReverse,
}: ReverseNavButtonProps) => {
  return (
    <>
      {showReverseButton && setIsReverse && (
        <button
          className={clsx(
            "font-light w-32 h-10 grid place-items-center border-2 rounded-xl hover:bg-green-600 transition-all border-green-600",
            isReverse && "bg-green-600"
          )}
          onClick={() => setIsReverse(!isReverse)}
        >
          🔄 Reverse
        </button>
      )}
    </>
  );
};
