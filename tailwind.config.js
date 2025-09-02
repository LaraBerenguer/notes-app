/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: {
                    light: "#ffffff",
                    dark: "#202124",
                },
                foreground: {
                    light: "#171717",
                    dark: "#e8eaed",
                },
            },
        },
    },
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
};