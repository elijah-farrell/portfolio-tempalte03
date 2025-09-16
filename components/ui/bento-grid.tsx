import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-4xl grid-cols-1 gap-4 md:auto-rows-[12rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-sm row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-gray-200 bg-white p-4 transition duration-200 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:shadow-none",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-1">
        {icon}
        <div className="mt-2 mb-2 font-sans font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </div>
        <div className="font-sans text-sm font-normal text-gray-600 dark:text-gray-300">
          {description}
        </div>
      </div>
    </div>
  );
};

