"use client"
import { useDarkMode } from "@/hooks/useDarkMode";
import { Lightbulb, Moon } from "lucide-react";

const DarkModeToggler = () => {
    const { isDark, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className="px-3 py-1 rounded-lg border-2 border-gray-100"
            aria-label="Toggle dark mode"
        >
            {isDark ? <section className="flex gap-2 items-center"><Lightbulb strokeWidth={1} size={18} /><span>Light Mode</span></section> : <section className="flex gap-2 items-center"><Moon strokeWidth={1} size={18} /> Dark Mode</section>}
        </button>
    );
};

export default DarkModeToggler;