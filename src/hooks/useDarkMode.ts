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
        setIsDark((prevIsDark) => {
            const newIsDark = !prevIsDark;
            if (newIsDark) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
            localStorage.setItem(THEME_KEY, newIsDark ? "dark" : "light");
            return newIsDark;
        });
    };

    return { isDark, toggleDarkMode };
};