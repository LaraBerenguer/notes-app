"use client"
import { useDarkMode } from "@/hooks/useDarkMode";
import { Lightbulb, Moon } from "lucide-react";

const DarkModeToggler = () => {
    const { isDark, toggleDarkMode } = useDarkMode();

    return (
        <button
            onClick={toggleDarkMode}
            className="px-3 py-1 rounded border"
            aria-label="Toggle dark mode"
        >
            {isDark ? <section><Moon strokeWidth={1} size={18} /></section> : <section><Lightbulb strokeWidth={1} size={18} /></section>}
        </button>
    );
};

export default DarkModeToggler;