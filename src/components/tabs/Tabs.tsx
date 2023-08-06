"use client";
import { Tab } from "@headlessui/react";
import clsx from "clsx";
import { RecommendedOffersTab } from "./RecommendedOffersTab";
import { CarouselBoxesTab } from "./CarouselBoxesTab";

export default function Tabs() {
  return (
    <div className='w-full max-w-5xl mx-auto  px-2 py-16 sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex gap-1 space-x-1 rounded-xl bg-blue-900/20 p-1'>
          <Tab
            className={({ selected }) =>
              clsx(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-green-600 shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Recommended Offers
          </Tab>
          <Tab
            className={({ selected }) =>
              clsx(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-white",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-green-600 shadow"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Carousel Boxes
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <RecommendedOffersTab />
          <CarouselBoxesTab />
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
