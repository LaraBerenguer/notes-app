"use client"
import { useDarkMode } from "@/hooks/useDarkMode";
import { Lightbulb, Moon } from "lucide-react";

const DarkModeToggler = () => {
    const { isDark, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className="px-3 py-1 rounded-full border-1 border-gray-100 hover:shadow-sm dark:shadow-black transition"
            aria-label="Toggle dark mode"
        >
            {isDark ? <section className="flex gap-2 items-center"><Lightbulb strokeWidth={1} size={19} aria-label="Lightbulb"/></section> : <section className="flex gap-2 items-center"><Moon strokeWidth={1} size={18} aria-label="Moon" /></section>}
        </button>
    );
};

export default DarkModeToggler;