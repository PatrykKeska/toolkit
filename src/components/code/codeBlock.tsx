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
        <code className='italic inline-block mx-2 bg-gray-200 text-slate-800 py-2 px-5 rounded-md'>
          {text}
        </code>
      ) : (
        <code
          onClick={handleClick}
          className='italic inline-block mx-2 bg-gray-900 text-white py-2 px-5 rounded-md hover:cursor-pointer relative'
        >
          {text}
          {isClicked && (
            <span className='absolute bg-red-500 py-2 px-3 -top-10 left-1/2  -translate-x-1/2 rounded-md'>
              Copied
            </span>
          )}
        </code>
      )}
    </>
  );
};
