"use client";
import { useState } from "react";
import { CodePreviewNav } from "./nav/CodePreviewNav";
import { CodePreview } from "./CodePreview";
import { RenderHtml } from "./RenderHtml";

import "../../toolkit/toolkit.css";
import { ScriptPreview } from "./ScriptPreview";
interface ToolkitElementSectionProps {
  textCode: string;
  language: "javascript" | "css";
  elementName?: string;
  basic?: boolean;
  reverseTextCode?: string;
  textCodeOptions?: (reverse: boolean) => string;
  isVariant?: boolean;
  variants?: string[];
  scriptCode?: string;
  isScript?: boolean;
}

export enum Size {
  mobile = "360px",
  tablet = "600px",
  desktop = "1920px",
}

export enum PickedSize {
  mobile = "360px",
  tablet = "600px",
  desktop = "1920px",
}

export const ToolkitElementSection = ({
  textCode,
  language,
  elementName,
  basic,
  reverseTextCode,
  variants,
  isVariant,
  scriptCode,
  isScript,
}: ToolkitElementSectionProps) => {
  const [isView, setIsView] = useState(false);
  const [size, setSize] = useState(Size.desktop);
  const [pickedSize, setPickedSize] = useState(PickedSize.desktop);
  const [isReverse, setIsReverse] = useState(false);
  const [pickedVariant, setPickedVariant] = useState(0);
  const [isScriptView, setIsScriptView] = useState(false);

  return (
    <section className=' my-5 px-0 pb-3 rounded-xl max-w-[1600px]'>
      <CodePreviewNav
        setSize={setSize}
        isView={isView}
        setIsView={setIsView}
        textCode={textCode}
        pickedSize={pickedSize}
        setPickedSize={setPickedSize}
        basic={basic}
        isReverse={isReverse}
        setIsReverse={setIsReverse}
        showReverseButton={reverseTextCode ? true : false}
        setPickedVariant={setPickedVariant}
        isVariant={isVariant}
        isScriptView={isScriptView}
        setIsScriptView={setIsScriptView}
        scriptCode={scriptCode}
        isScript={isScript}
      />
      <h2 className='text-2xl uppercase font-bold'>{elementName}</h2>
      <div className='border-2 w-[100%] bg-slate-100 rounded-md bg-[linear-gradient(45deg,_rgb(249_250_251)_25%,_transparent_25%),_linear-gradient(-45deg,_rgb(249_250_251)_25%,_transparent_25%),_linear-gradient(45deg,_transparent_75%,_rgb(249_250_251)_75%),_linear-gradient(-45deg,_transparent_75%,_rgb(249_250_251)_75%)] bg-[length:_20px_20px] [background-position:_0_0,_0_10px,_10px_-10px,_-10px_0px] '>
        {isView ? (
          <>
            <CodePreview
              variant={variants && variants[pickedVariant]}
              language={language}
              isView={isView}
              textCode={!isReverse ? textCode : reverseTextCode}
            />
          </>
        ) : (
          isScriptView &&
          !isView && (
            <ScriptPreview isScriptView={isScriptView} script={scriptCode} />
          )
        )}
        {!isView && !isScriptView && language === "javascript" && (
          <RenderHtml
            variant={variants && variants[pickedVariant]}
            size={size}
            textCode={!isReverse ? textCode : reverseTextCode}
            script={scriptCode}
          />
        )}
      </div>
    </section>
  );
};
