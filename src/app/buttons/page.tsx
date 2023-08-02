import { ComponentPageWrapper } from "@/components/CodePreview/ComponentPageWrapper";
import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { Navi } from "@/components/nav/Navi";
import { checkOffersButtonCss } from "@/db/css/buttons/checkOffersButton.css";
import { checkOffersButtonRed } from "@/db/css/buttons/checkOffersButtonRed.css";
import { mobileCarouselOffersBtnCss } from "@/db/css/buttons/mobileCarouselOffersBtn.css";
import { checkOffersButton } from "@/db/html/buttons/checkOffersButton";
import { mainOffersBtn } from "@/db/html/buttons/mainOffersBtn";
import { mobileCarouselOffersBtn } from "@/db/html/buttons/mobileCarouselOffersBtn";

const ButtonsPage = () => {
  return (
    <>
      <Navi />
      <ComponentPageWrapper>
        <ToolkitElementSection
          elementName='Hero section button'
          language='javascript'
          htmlCode={mainOffersBtn}
          cssCode={checkOffersButtonRed}
        />
        <ToolkitElementSection
          language='javascript'
          elementName='button under carousel on mobile'
          htmlCode={mobileCarouselOffersBtn}
          cssCode={mobileCarouselOffersBtnCss}
        />
        <ToolkitElementSection
          elementName='button inside box section with img'
          language='javascript'
          htmlCode={checkOffersButton}
          cssCode={checkOffersButtonCss}
        />
      </ComponentPageWrapper>
    </>
  );
};

export default ButtonsPage;
