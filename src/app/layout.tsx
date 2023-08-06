import { FooterTheme } from "@/layout/footer/footerTheme";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Component based on Figma design",
  description: "Ready to use components based on Figma design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-6 max-w-3xl lg:max-w-[1400px] pb-56 relative`}
      >
        {children}
        <FooterTheme />
      </body>
    </html>
  );
}
