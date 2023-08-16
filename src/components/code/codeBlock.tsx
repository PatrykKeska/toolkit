"use client";

import { useState } from "react";

interface CodeBlockProps {
  text: string;
  gray?: boolean;
}

export const CodeBlock = ({ text, gray }: CodeBlockProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    navigator.clipboard.writeText(text);
    setIsClicked(!isClicked);
    setTimeout(() => {
      setIsClicked(false);
    }, 1500);
  };
  return (
    <>
      {gray ? (
        <code className="mx-2 inline-block rounded-md bg-gray-200 px-5 py-2 italic text-slate-800">
          {text}
        </code>
      ) : (
        <code
          onClick={handleClick}
          className="relative mx-2 inline-block rounded-md bg-gray-900 px-5 py-2 italic text-white hover:cursor-pointer"
        >
          {text}
          {isClicked && (
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-red-500  px-3 py-2">
              Copied
            </span>
          )}
        </code>
      )}
    </>
  );
};
