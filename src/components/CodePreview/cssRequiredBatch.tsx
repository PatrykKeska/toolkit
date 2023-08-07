import clsx from "clsx";

interface CssRequiredBatchProps {
  style?: string;
}

export const CssRequiredBatch = ({ style }: CssRequiredBatchProps) => {
  return (
    <span
      className={clsx(
        `text-slate-100 block text-center font-bold bg-red-600 w-32 rounded-sm mx-0 my-0 mb-2`,
        style ? style : ""
      )}
    >
      {" "}
      Css Required{" "}
    </span>
  );
};
