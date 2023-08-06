import { mobileCarouselOffersBtn } from "@/db/html/buttons/mobileCarouselOffersBtn";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { Accordions } from "../accordions/Accordions";
import { carouselBoxesTitle } from "@/db/html/carousels/carouselBoxesTitle";
import { carouselsCss } from "@/db/css/carousels/carousels.css";
import { CarouselBoxesDescription } from "../carousels/CarouselBoxesDescription";

export const CarouselBoxesTab = () => {
  const [carousel1, setCarousel1] = useState(false);
  const [carousel2, setCarousel2] = useState(false);
  const [carousel3, setCarousel3] = useState(false);
  const [carousel4, setCarousel4] = useState(false);
  return (
    <>
      <section className='py-10'>
        <Accordions
          modifier={carousel1}
          setModifier={setCarousel1}
          code={carouselBoxesTitle}
          btnText='1. Create Html Component to implement Carousel Title'
        />
        <Accordions
          modifier={carousel2}
          setModifier={setCarousel2}
          btnText='2. Create carousel boxes element in Strapi'
        >
          <CarouselBoxesDescription />
        </Accordions>
        <Accordions
          modifier={carousel3}
          setModifier={setCarousel3}
          code={mobileCarouselOffersBtn}
          btnText='3. Create Html Component to implement Mobile offers button'
        />
        <Accordions
          modifier={carousel4}
          setModifier={setCarousel4}
          code={carouselsCss}
          leannguage='css'
          btnText='4. Add Css - Only for Starter.css'
        />
      </section>
    </>
  );
};
