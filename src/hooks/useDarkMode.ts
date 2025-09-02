import { useEffect, useState } from "react";

const THEME_KEY = "theme";

export function useDarkMode() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {        
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme) {
            setIsDark(savedTheme === "dark");
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setIsDark(prefersDark);
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    const toggleDarkMode = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        document.documentElement.classList.toggle("dark", newIsDark);
        localStorage.setItem(THEME_KEY, newIsDark ? "dark" : "light");
    };

    return { isDark, toggleDarkMode };
};