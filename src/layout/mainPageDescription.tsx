import { CssRequiredBatch } from "@/components/CodePreview/cssRequiredBatch";

export const MainPageDescription = () => {
  return (
    <section>
      <div className='mx-auto max-w-screen-md px-4 py-10 lg:flex lg:items-center'>
        <div className='mx-auto max-w-6xl text-center'>
          <h1 className='text-4xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text font-extrabold text-transparent md:text-6xl'>
            Landingpage Toolkit
            <span className='sm:block'> Increase efficiency</span>
          </h1>

          <p className='mx-auto text-2xl my-5 text-green-400 font-bold  shadow-white'>
            Getting Started
          </p>
          <p className='mb-4 flex justify-start'>
            <code className='bg-gray-200 p-1 rounded text-slate-800 h-7'>
              Toolkit.css
            </code>{" "}
            is a whole complete file with all most common components included -
            use what you need and remove the rest.
          </p>
          <p className='mb-4 flex justify-start h-7'>
            <code className='bg-gray-200 p-1 rounded text-slate-800'>{`Starter.css`}</code>{" "}
            is a barebones file with only the variables and classes you need to
            use with prepared components or you can build your own components.
          </p>

          <p className='text-sm text-red-600 py-5'>
            There are certain components, such as counters, that are considered
            to be rare and are not included in the toolkit or starter file. In
            order to use these components, you will need to copy the
            corresponding CSS separately. To identify these components, they
            will be marked with a specific notation.
            <CssRequiredBatch />
          </p>
        </div>
      </div>
    </section>
  );
};
