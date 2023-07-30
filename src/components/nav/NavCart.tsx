import Link from "next/link";

interface NavCartProps {
  href: string;
  title: string;
  icon: string;
}

export const NavCart = ({ href, title, icon }: NavCartProps) => {
  return (
    <Link
      href={href}
      className='border-2 p-4 w-32 h-28 text-md md:w-64 md:px-8 md:py-8 rounded-xl
       bg-slate-100 text-gray-600
        transition-bg duration-300 ease-in-out hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:bg-indigo-500'
    >
      <h3 className='font-semibold grid text-center place-items-center'>
        <span
          className='scale-125 md:scale-[175%] flex justify-center items-center flex-1 w-10 h-8'
          role='img'
        >
          {icon}
        </span>
        {title}
      </h3>
    </Link>
  );
};
