import { ComponentPageWrapper } from "@/components/CodePreview/ComponentPageWrapper";
import { Navi } from "@/components/nav/Navi";

interface PageLayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Navi />
      <ComponentPageWrapper>{children}</ComponentPageWrapper>
    </>
  );
};
