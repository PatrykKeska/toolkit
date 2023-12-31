import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ToolkitDisplayInterface } from "./CodePreview/ToolkitElementSection";

const size = [
  { size: 0, description: "small" },
  { size: 1, description: "medium" },
  { size: 2, description: "large" },
];

interface ListboxVariantsProps {
  setToolkitDisplay: (arg: ToolkitDisplayInterface) => void;
  toolkitDisplay: ToolkitDisplayInterface;
}

export default function ListboxVariants({
  setToolkitDisplay,
  toolkitDisplay,
}: ListboxVariantsProps) {
  const [selected, setSelected] = useState(size[0]);

  useEffect(() => {
    setToolkitDisplay({
      ...toolkitDisplay,
      pickedVariant: selected.size,
    });
  }, [selected]);

  return (
    <div className='min-w-[200px] h-full'>
      <Listbox value={selected} onChange={setSelected}>
        <div className='relative my-auto'>
          <Listbox.Button className='relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
            <span className='block truncate text-black'>
              {"font-size: " + selected.description}
            </span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'></span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {size.map((sizeVal, sizeValIdx) => (
                <Listbox.Option
                  key={sizeValIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-green-600 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={sizeVal}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {sizeVal.description}
                      </span>
                      {selected ? (
                        <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-black'></span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
