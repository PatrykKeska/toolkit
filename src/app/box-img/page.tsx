import { ComponentPageWrapper } from "@/components/CodePreview/ComponentPageWrapper";
import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { Navi } from "@/components/nav/Navi";
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
          textCode={singleBox}
          reverseTextCode={singleBoxReverse}
        />

        <ToolkitElementSection
          elementName='Single Box No Img Mobile'
          language='javascript'
          textCode={singleBoxNoImgMobile}
          reverseTextCode={singleBoxNoImgMobileReverse}
        />

        <ToolkitElementSection
          elementName='Single Box No Img Mobile'
          language='javascript'
          textCode={singleBoxNoImgMobileAlt}
          reverseTextCode={singleBoxNoImgMobileAltReverse}
        />

        <ToolkitElementSection
          elementName='3 box set'
          language='javascript'
          textCode={fullBox}
        />
      </ComponentPageWrapper>
    </>
  );
};

export default BoxImgPage;
