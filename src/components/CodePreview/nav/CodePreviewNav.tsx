import ListboxVariants from "@/components/ListboxVariants";
import { PickedSize, Size } from "../ToolkitElementSection";
import { CoppyViewBtn } from "./CoppyViewBtn";
import { ResizeButtonNav } from "./ResizeButtonNav";
import { ReverseNavButton } from "./ReverseNavButton";

interface CodePreviewNavProps {
  textCode: string;
  clicked?: boolean;
  setIsView: (arg: boolean) => void;
  isView: boolean;
  setSize: (arg: Size) => void;
  pickedSize: PickedSize;
  setPickedSize: (arg: PickedSize) => void;
  basic?: boolean;
  isReverse?: boolean;
  setIsReverse?: (arg: boolean) => void;
  showReverseButton?: boolean;
  setPickedVariant: (variant: number) => void;
  isVariant?: boolean;
  isScript?: boolean;
  setIsScriptView: (arg: boolean) => void;
  isScriptView: boolean;
  scriptCode?: string;
}

export const CodePreviewNav = ({
  textCode,
  isView,
  setIsView,
  setSize,
  pickedSize,
  setPickedSize,
  basic,
  isReverse,
  setIsReverse,
  showReverseButton,
  setPickedVariant,
  isVariant,
  isScript,
  setIsScriptView,
  isScriptView,
  scriptCode,
}: CodePreviewNavProps) => {
  return (
    <nav className='flex-col md:flex-row max-w-[1600px] flex gap-5 items-start my-5 justify-between'>
      <div className='flex gap-5'>
        <CoppyViewBtn
          setIsView={setIsView}
          isView={isView}
          type='view'
          text={textCode}
          isScriptView={isScriptView}
          setIsScriptView={setIsScriptView}
        />
        <CoppyViewBtn
          setIsView={setIsView}
          isView={isView}
          type='coppy'
          text={isView ? textCode : scriptCode}
        />
        {isScript && (
          <CoppyViewBtn
            setIsView={setIsView}
            isView={isView}
            setIsScriptView={setIsScriptView}
            isScriptView={isScriptView}
            type='script'
            text={textCode}
          />
        )}
        <ReverseNavButton
          isReverse={isReverse}
          setIsReverse={setIsReverse}
          showReverseButton={showReverseButton}
        />
        {isVariant && <ListboxVariants setPickedVariant={setPickedVariant} />}
      </div>
      {!basic && (
        <div className='flex gap-5'>
          <ResizeButtonNav
            icon='📱'
            name='Mobile'
            size={Size.mobile}
            setSize={setSize}
            pickedSize={pickedSize}
            setPickedSize={setPickedSize}
          />
          <ResizeButtonNav
            icon='💻'
            name='Medium'
            size={Size.tablet}
            setSize={setSize}
            pickedSize={pickedSize}
            setPickedSize={setPickedSize}
          />
          <ResizeButtonNav
            icon='🖥️'
            name='Desktop'
            size={Size.desktop}
            setSize={setSize}
            pickedSize={pickedSize}
            setPickedSize={setPickedSize}
          />
        </div>
      )}
    </nav>
  );
};
