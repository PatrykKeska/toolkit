interface ComponentPageWrapperProps {
  children: React.ReactNode | React.ReactNode[];
}

export const ComponentPageWrapper = ({
  children,
}: ComponentPageWrapperProps) => {
  return <div className='flex flex-col gap-10'>{children}</div>;
};
