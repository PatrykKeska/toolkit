export const MainPageDescription = () => {
  return (
    <div className='my-4 gap-3 w-5/6 flex flex-col items-center justify-center'>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-7xl'>
        Landing Page Toolkit
      </h1>

      <div className='mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 flex flex-col text-center'>
        <h1 className='text-2xl font-bold mb-4 text-green-500'>
          Getting Started
        </h1>
        <p className='mb-4 text-gray-400 text-md'>
          To begin, please copy the provided code into your CSS file or link it
          to your HTML document.
        </p>
        <p className='mb-4'>
          <code className='bg-gray-200 p-1 rounded'>{`Toolkit.css`}</code> is a
          whole complete file with all components included - use what you need
          and remove the rest.
        </p>
        <p className='mb-4'>
          <code className='bg-gray-200 p-1 rounded'>{`Starter.css`}</code> is a
          barebones file with only the variables and classes you need to use
          with prepared components or you can build your own components.
        </p>

        <p className='text-red-500'>
          Some components are not included in toolkit or starter file becouse is
          quite rare such as counters. Those component required to copy css
          also. <span className='text-red-500'>Not Included</span>
        </p>
      </div>
    </div>
  );
};
