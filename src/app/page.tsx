"use client";
import { Accordions } from "@/components/accordions/Accordions";
import { Navi } from "@/components/nav/Navi";
import { cssDB } from "@/db/css.db";
import { starterCss } from "@/db/css/starter.css";
import { MainPageDescription } from "@/layout/mainPageDescription";
import { useState } from "react";

export default function Home() {
  const [openTab, setOpenTab] = useState(false);
  const [openTab2, setOpenTab2] = useState(false);
  return (
    <main className='w-full flex flex-col items-center'>
      <MainPageDescription />

      <section className='w-full'>
        <Accordions
          btnText={
            !openTab
              ? "Click to open Toolkit.css"
              : "Click to close Toolkit.css"
          }
          setModifier={setOpenTab}
          modifier={openTab}
          code={cssDB}
        />
        <Accordions
          btnText={
            !openTab2
              ? "Click to open Starter.css"
              : "Click to close Starter.css"
          }
          setModifier={setOpenTab2}
          modifier={openTab2}
          code={starterCss}
        />
      </section>
      <h2 className='text-2xl font-bold w-full text-green-400 text-center'>
        Please obtain the required components now.
      </h2>
      <Navi />
    </main>
  );
}
