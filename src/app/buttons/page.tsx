import { ComponentPageWrapper } from "@/components/CodePreview/ComponentPageWrapper";
import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { Navi } from "@/components/nav/Navi";
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
          textCode={mainOffersBtn}
        />
        <ToolkitElementSection
          language='javascript'
          elementName='button under carousel on mobile'
          textCode={mobileCarouselOffersBtn}
        />
        <ToolkitElementSection
          elementName='button inside box section with img'
          language='javascript'
          textCode={checkOffersButton}
        />
      </ComponentPageWrapper>
    </>
  );
};

export default ButtonsPage;
