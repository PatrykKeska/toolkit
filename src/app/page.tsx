import { ToolkitElementSection } from "@/components/CodePreview/ToolkitElementSection";
import { Navi } from "@/components/nav/Navi";
import { cssDB } from "@/db/css.db";

export default function Home() {
  return (
    <main className='w-full flex flex-col items-center'>
      <div className='my-4 gap-3 w-5/6 flex flex-col items-center justify-center'>
        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
          Landing Page Toolkit
        </h1>
        <p className='mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 flex flex-col text-center'>
          The toolkit enables the use of pre-prepared components from Figma
          projects, allowing for customization. It also provides variables and
          classes for building personalized components. Empower your projects
          with this versatile toolkit.
          <span>
            <strong className='block text-center text-green-400'>
              To begin, please copy the provided code into your CSS file or link
              it to your HTML document.
            </strong>
          </span>
        </p>
      </div>

      <section className='w-full'>
        <ToolkitElementSection
          basic
          elementName='Toolkit.css'
          language='css'
          textCode={cssDB}
        />
      </section>
      <h2 className='text-2xl font-bold w-full text-green-400 text-center'>
        Please obtain the required components now.
      </h2>
      <Navi />
    </main>
  );
}
