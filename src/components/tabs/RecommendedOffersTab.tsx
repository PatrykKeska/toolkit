import { carouselsCss } from "@/db/css/carousels/carousels.css";
import { mobileCarouselOffersBtn } from "@/db/html/buttons/mobileCarouselOffersBtn";
import { recommendedOffersTitle } from "@/db/html/carousels/recommendedOffersTitle";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { Accordions } from "../accordions/Accordions";
import { RecommendedOffersDescription } from "../carousels/recommendedOffersDescription";

export const RecommendedOffersTab = () => {
  const [recommended1, setrRcommended1] = useState(false);
  const [recommended2, setrRcommended2] = useState(false);
  const [recommended3, setrRcommended3] = useState(false);
  const [recommended4, setrRcommended4] = useState(false);
  return (
    <Tab.Panel>
      <section className='py-10'>
        <Accordions
          modifier={recommended1}
          setModifier={setrRcommended1}
          code={recommendedOffersTitle}
          btnText='1. Create Html Component to implement Offers Title'
        />
        <Accordions
          modifier={recommended2}
          setModifier={setrRcommended2}
          children={<RecommendedOffersDescription />}
          btnText='2. Create Recommended Offers Element in Strapi'
        />
        <Accordions
          modifier={recommended3}
          setModifier={setrRcommended3}
          code={mobileCarouselOffersBtn}
          btnText='3. Create Html Component to implement Mobile offers button'
        />
        <Accordions
          modifier={recommended4}
          setModifier={setrRcommended4}
          code={carouselsCss}
          leannguage='css'
          btnText='4. Add Css - Only for Starter.css'
        />
      </section>
    </Tab.Panel>
  );
};
