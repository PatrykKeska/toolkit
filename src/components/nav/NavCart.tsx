"use client";
import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavCartProps {
  href: string;
  title: string;
  icon: StaticImport;
}

export const NavCart = ({ href, title, icon }: NavCartProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={clsx(
        `group relative  border-2 p-1 w-[40%] text-sm md:text-md md:w-64 md:px-8 md:py-4 rounded-xl
       bg-slate-100 text-gray-600
         transition-bg duration-300 ease-in-out
         focus:outline-none
         hover:rotate-2 hover:scale-110`,
        isActive && "bg-gradient-to-tl from-blue-700 to-purple-800 text-white "
      )}
    >
      <h3 className='font-semibold grid text-center place-items-center'>
        {icon && (
          <Image className='w-6 h-6 md:w-9 md:h-9' src={icon} alt={title} />
        )}
        {title}
      </h3>
    </Link>
  );
};
