"use client";
import { DownloadToolkitButton } from "@/components/DownloadToolkitFile";
import { Accordions } from "@/components/accordions/Accordions";
import { Navi } from "@/components/nav/Navi";
import { cssDB } from "@/db/css.db";
import { starterCss } from "@/db/css/starter.css";
import { MainPageDescription } from "@/layout/mainPageDescription";
import { DownloadFileLayout } from "@/layout/toolkit-download/DownloadFileLayout";
import { useState } from "react";

export default function Home() {
  const [openTab, setOpenTab] = useState(false);
  const [openTab2, setOpenTab2] = useState(false);

  return (
    <main className="flex w-full flex-col items-center">
      <MainPageDescription />
      <DownloadFileLayout />
      <section className="flex w-full flex-col">
        <Accordions
          btnText={
            !openTab
              ? "Click to open Toolkit.css"
              : "Click to close Toolkit.css"
          }
          setModifier={setOpenTab}
          modifier={openTab}
          code={cssDB}
          leannguage="css"
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
          leannguage="css"
        />
      </section>
      <h2 className="w-full text-center text-2xl font-bold text-green-400">
        Please obtain the required components now.
      </h2>
      <Navi />
    </main>
  );
}
