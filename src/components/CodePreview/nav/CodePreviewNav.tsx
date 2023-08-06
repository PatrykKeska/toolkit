import ListboxVariants from "@/components/ListboxVariants";
import { Size, ToolkitDisplayInterface } from "../ToolkitElementSection";
import { CoppyViewBtn } from "./CoppyViewBtn";
import { ResizeButtonNav } from "./ResizeButtonNav";
import { ReverseNavButton } from "./ReverseNavButton";

interface CodePreviewNavProps {
  clicked?: boolean;
  basic?: boolean;
  isReverse?: boolean;
  showReverseButton?: boolean;
  isVariant?: boolean;
  isScript?: boolean;

  ToolkitDisplay: ToolkitDisplayInterface;
  setToolkitDisplay: (arg: ToolkitDisplayInterface) => void;
}

export const CodePreviewNav = ({
  basic,
  ToolkitDisplay,
  setToolkitDisplay,
  isScript,
  isVariant,
  isReverse,
}: CodePreviewNavProps) => {
  return (
    <nav className='flex-col flex-wrap md:flex-row max-w-[1600px] flex gap-5 items-start my-5 justify-between'>
      <div className='flex gap-5 flex-wrap'>
        <CoppyViewBtn
          type='view'
          toolkitDisplay={ToolkitDisplay}
          setToolkitDisplay={setToolkitDisplay}
        />
        <CoppyViewBtn
          type='html'
          toolkitDisplay={ToolkitDisplay}
          setToolkitDisplay={setToolkitDisplay}
        />
        <CoppyViewBtn
          type='css'
          toolkitDisplay={ToolkitDisplay}
          setToolkitDisplay={setToolkitDisplay}
        />
        {isScript && (
          <CoppyViewBtn
            type='script'
            toolkitDisplay={ToolkitDisplay}
            setToolkitDisplay={setToolkitDisplay}
          />
        )}
        <CoppyViewBtn
          type='copy'
          toolkitDisplay={ToolkitDisplay}
          setToolkitDisplay={setToolkitDisplay}
        />

        {isReverse && (
          <ReverseNavButton
            toolkitDisplay={ToolkitDisplay}
            setToolkitDisplay={setToolkitDisplay}
          />
        )}
        {isVariant && (
          <ListboxVariants
            toolkitDisplay={ToolkitDisplay}
            setToolkitDisplay={setToolkitDisplay}
          />
        )}
      </div>

      {!basic && (
        <div className='flex gap-5 flex-wrap'>
          <ResizeButtonNav
            icon='📱'
            name='Mobile'
            toolkitDisplay={ToolkitDisplay}
            setToolkitDisplay={setToolkitDisplay}
            size={Size.mobile}
          />
          <ResizeButtonNav
            icon='💻'
            name='Medium'
            toolkitDisplay={ToolkitDisplay}
            setToolkitDisplay={setToolkitDisplay}
            size={Size.tablet}
          />
          <ResizeButtonNav
            icon='🖥️'
            name='Desktop'
            toolkitDisplay={ToolkitDisplay}
            setToolkitDisplay={setToolkitDisplay}
            size={Size.desktop}
          />
        </div>
      )}
    </nav>
  );
};
