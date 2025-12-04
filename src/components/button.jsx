import { cn } from "clsx-for-tailwind";

export function ChoiceButton({ onChoice, children, classItem }) {
    const baseClasses = "px-4 py-2 rounded-lg text-white";
    const defaultClasses = "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5";
    return (
        <button onClick={onChoice} className={`${baseClasses} ${defaultClasses} ${classItem || ""}`}>
            {children}
        </button>
    );
}