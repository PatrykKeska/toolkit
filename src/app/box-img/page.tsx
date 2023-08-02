import { ComponentPageWrapper } from "@/components/CodePreview/ComponentPageWrapper";
import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { Navi } from "@/components/nav/Navi";
import { boxImgCss } from "@/db/css/boxImg/boxImg.css";
import { fullBox } from "@/db/html/box-img/full-box";
import { singleBox, singleBoxReverse } from "@/db/html/box-img/singleBox";
import {
  singleBoxNoImgMobile,
  singleBoxNoImgMobileAlt,
  singleBoxNoImgMobileAltReverse,
  singleBoxNoImgMobileReverse,
} from "@/db/html/box-img/singleBoxNoImgMobile";

const BoxImgPage = () => {
  return (
    <>
      <Navi />
      <ComponentPageWrapper>
        <ToolkitElementSection
          elementName='Single Box'
          language='javascript'
          htmlCode={singleBox}
          cssCode={boxImgCss}
          reverseTextCode={singleBoxReverse}
        />

        <ToolkitElementSection
          elementName='Single Box No Img Mobile'
          language='javascript'
          cssCode={boxImgCss}
          htmlCode={singleBoxNoImgMobile}
          reverseTextCode={singleBoxNoImgMobileReverse}
        />

        <ToolkitElementSection
          elementName='Single Box No Img Mobile'
          language='javascript'
          cssCode={boxImgCss}
          htmlCode={singleBoxNoImgMobileAlt}
          reverseTextCode={singleBoxNoImgMobileAltReverse}
        />

        <ToolkitElementSection
          elementName='3 box set'
          language='javascript'
          cssCode={boxImgCss}
          htmlCode={fullBox}
        />
      </ComponentPageWrapper>
    </>
  );
};

export default BoxImgPage;
