interface PreviewBackgroundProps {
  children: React.ReactNode | React.ReactNode[];
}

export const PreviewBackground = ({ children }: PreviewBackgroundProps) => {
  return (
    <div className='border-2 w-[100%] bg-slate-100 rounded-md bg-[linear-gradient(45deg,_rgb(249_250_251)_25%,_transparent_25%),_linear-gradient(-45deg,_rgb(249_250_251)_25%,_transparent_25%),_linear-gradient(45deg,_transparent_75%,_rgb(249_250_251)_75%),_linear-gradient(-45deg,_transparent_75%,_rgb(249_250_251)_75%)] bg-[length:_20px_20px] [background-position:_0_0,_0_10px,_10px_-10px,_-10px_0px] '>
      {children}
    </div>
  );
};
