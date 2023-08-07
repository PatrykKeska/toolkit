import "../../toolkit/toolkit.css";
import { cssDB } from "@/db/css.db";
import clsx from "clsx";
import { Size } from "./ToolkitElementSection";

interface RenderHtmlProps {
  htmlCode: string | undefined;
  cssCode: string | undefined;
  size: Size;
  variant?: string;
  script?: string;
  isReverse?: boolean;
}

export const RenderHtml = ({
  htmlCode,
  size,
  variant,
  script,
  cssCode,
}: RenderHtmlProps) => {
  const cssStyles = cssCode + cssDB;
  return (
    <>
      <iframe
        style={{
          transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
          maxWidth: size,
        }}
        className={clsx(
          `w-[100%] min-h-[800px] border-2  rounded-lg border-gray-700`
        )}
        srcDoc={`<html>
        <head>
            <style>
                ${cssDB}
            </style>
            <style>
              ${cssCode}
            </style>
  
            <style>
                body {
                    margin: 0 auto;
                    min-height: 100vh;
                    display: flex;
                    jutify-content: center;
                    background-color: rgb(241 245 249);
                }

                .developer-mode{
                  max-width:1180px;
                  margin:0 auto;
                  width:100%;
                  height:100%;
                  min-height:100vh;
                  display:flex;
                  justify-content:center;
                  align-items:center;
                  flex-direction:column;
                  padding-bottom: 100px;
                  
                }

                .outer-pdf{
                  width:100%;
                  height:100%;
                }

                * {
                  box-sizing: border-box;
                }
            </style>
        </head>
        <body>
            <div class="developer-mode">${variant ? variant : htmlCode}</div>
            <script> 
            ${script && script}
            </script>
        </body>
    </html>`}
      ></iframe>
    </>
  );
};
