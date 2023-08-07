"use client";
import { useState } from "react";
import { CodePreviewNav } from "./nav/CodePreviewNav";
import { RenderHtml } from "./RenderHtml";
import "../../toolkit/toolkit.css";
import { ScriptPreview } from "./ScriptPreview";
import { CssPreveiw } from "./CssPreview";
import { HtmlPreview } from "./HtmlPreview";
import { PreviewBackground } from "./PreviewBackground";
import { CssRequiredBatch } from "./cssRequiredBatch";
import { FullWidthRequired } from "./FullWidthRequiredBatch";
interface ToolkitElementSectionProps {
  htmlCode: string;
  language: "javascript" | "css";
  elementName?: string;
  basic?: boolean;
  reverseTextCode?: string;
  textCodeOptions?: (reverse: boolean) => string;
  isVariant?: boolean;
  variants?: string[];
  scriptCode?: string;
  isScript?: boolean;
  cssCode?: string;
  cssRequired?: boolean;
  fullWidthRequired?: boolean;
}

export enum Size {
  mobile = "360px",
  tablet = "600px",
  desktop = "1920px",
}

export interface ToolkitDisplayInterface {
  isPreview: boolean;
  isHtmlView: boolean;
  isCssView: boolean;
  isScriptView: boolean;
  isReverse: boolean;
  size: Size;
  pickedVariant: number;
  isCopied: boolean;
}

export const ToolkitElementSection = ({
  htmlCode,
  language,
  elementName,
  basic,
  reverseTextCode,
  variants,
  isVariant,
  scriptCode,
  isScript,
  cssCode,
  cssRequired,
  fullWidthRequired,
}: ToolkitElementSectionProps) => {
  const [ToolkitDisplay, setToolkitDisplay] = useState<ToolkitDisplayInterface>(
    {
      isPreview: true,
      isHtmlView: false,
      isCssView: false,
      isScriptView: false,
      isReverse: false,
      size: Size.desktop,
      isCopied: false,
      pickedVariant: 0,
    }
  );

  return (
    <section className=' my-5 px-0 pb-3 rounded-xl max-w-[1400px]'>
      <CodePreviewNav
        ToolkitDisplay={ToolkitDisplay}
        setToolkitDisplay={setToolkitDisplay}
        basic={basic}
        isVariant={isVariant}
        isScript={isScript}
        isReverse={reverseTextCode ? true : false}
        showReverseButton={reverseTextCode ? true : false}
      />
      <h2 className='text-2xl uppercase font-bold my-2'>{elementName}</h2>
      <div className='flex justify-center gap-5 flex-wrap'>
        {cssRequired && <CssRequiredBatch />}
        {fullWidthRequired && <FullWidthRequired />}
      </div>
      <PreviewBackground>
        {ToolkitDisplay.isPreview && (
          <RenderHtml
            htmlCode={ToolkitDisplay.isReverse ? reverseTextCode : htmlCode}
            script={scriptCode}
            cssCode={cssCode}
            variant={variants && variants[ToolkitDisplay.pickedVariant]}
            size={ToolkitDisplay.size}
            isReverse={ToolkitDisplay.isReverse}
          />
        )}
        {ToolkitDisplay.isHtmlView && (
          <HtmlPreview
            language='javascript'
            variant={variants && variants[ToolkitDisplay.pickedVariant]}
            isHtmlView={ToolkitDisplay.isHtmlView}
            htmlCode={ToolkitDisplay.isReverse ? reverseTextCode : htmlCode}
            toolkitDisplay={ToolkitDisplay}
            setToolkitDisplay={setToolkitDisplay}
          />
        )}
        {ToolkitDisplay.isScriptView && (
          <ScriptPreview
            isScriptView={ToolkitDisplay.isScriptView}
            script={scriptCode}
            toolkitDisplay={ToolkitDisplay}
            setToolkitDisplay={setToolkitDisplay}
          />
        )}
        {ToolkitDisplay.isCssView && (
          <CssPreveiw
            isCssPreview={ToolkitDisplay.isCssView}
            cssCode={cssCode}
            toolkitDisplay={ToolkitDisplay}
            setToolkitDisplay={setToolkitDisplay}
          />
        )}
      </PreviewBackground>
    </section>
  );
};
