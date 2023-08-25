import { CodeBlock } from "../code/codeBlock";

interface ChecklistItem {
  text: string;
  code?: string;
}

interface ChecklistProps {
  title: string;
  items: ChecklistItem[];
}

export const Checklist = ({ title, items }: ChecklistProps) => {
  return (
    <>
      <h3 className="text-center text-2xl font-semibold text-red-400">
        {title}
      </h3>
      <ul className=" rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
        {items.map((item, index) => (
          <li
            key={index}
            className="hiver:bg-gray-100 flex h-16 w-full rounded-t-lg border-b border-gray-200 transition-all duration-300  hover:cursor-pointer hover:bg-gray-400 dark:border-gray-600 dark:hover:bg-gray-800 "
          >
            <div className="flex items-center pl-3">
              <input
                id={item.text}
                type="checkbox"
                value={item.text}
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
              />
              <label
                htmlFor={item.text}
                className="ml-2 w-full p-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {item.text} {item.code && <CodeBlock text={item.code} />}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
