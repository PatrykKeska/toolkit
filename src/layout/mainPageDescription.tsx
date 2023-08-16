import { CssRequiredBatch } from "@/components/CodePreview/cssRequiredBatch";
import { CodeBlock } from "@/components/code/codeBlock";

export const MainPageDescription = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-md px-4 pb-2 pt-10 lg:flex lg:items-center">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-4xl font-extrabold text-transparent md:text-6xl">
            Landingpage Toolkit
            <span className="sm:block"> Increase efficiency</span>
          </h1>
          <article className="flex flex-col items-center justify-center">
            <p className="mx-auto  my-5 text-lg font-bold text-green-400 shadow-white  lg:text-2xl">
              Getting Started
            </p>
            <p className="mb-4 w-3/4">
              <CodeBlock text="  Toolkit.css" gray />
              is a whole complete file with all most common components included
              - use what you need and remove the rest.
            </p>
            <p className="mb-4 w-3/4">
              <CodeBlock text="  Starter.css" gray />
              is a barebones file with only the variables and classes you need
              to use with prepared components or you can build your own
              components.
            </p>

            <p className="py-5 text-sm text-red-600">
              There are certain components, such as counters, that are
              considered to be rare and are not included in the toolkit or
              starter file. In order to use these components, you will need to
              copy the corresponding CSS separately. To identify these
              components, they will be marked with a specific notation.
              <CssRequiredBatch style="ml-auto mr-auto mt-2" />
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
