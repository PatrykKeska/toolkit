import { IconCreators } from "@/components/footer/iconsCreators";
import tools from "../../assets/icons/png/tools.png";
import Image from "next/image";
import Link from "next/link";
export const FooterTheme = () => {
  return (
    <>
      <footer className='bg-slate-900  rounded-md  absolute bottom-0 w-full left-0'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
          <div className='md:flex md:items-center md:justify-between justify-center items-center'>
            <div className='flex justify-center text-teal-600 sm:justify-start'>
              <div className='flex flex-1 justify-center items-center'>
                <Link href='/'>
                  <h2 className='text-4xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent md:text-6xl md:flex'>
                    LP
                    <Image
                      className='inline max-w-[65px] max-h-[65px]'
                      src={tools}
                      alt='toolkit'
                    />
                  </h2>
                </Link>
              </div>
            </div>
            <IconCreators />
            <p className='text-sm text-gray-500 w-full md:w-auto text-center'>
              Copyright &copy; 2023. All rights&nbsp;reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
