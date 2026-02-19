import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: "#2563EB",
                },
                feedback: {
                    success: "#10B981",
                    error: "#EF4444",
                },
                surface: {
                    bg: "#F9FAFB",
                },
                text: {
                    main: "#111827",
                },
                // Map standard utilities to design tokens for compatibility
                primary: {
                    DEFAULT: "#2563EB",
                    foreground: "#FFFFFF",
                },
                destructive: {
                    DEFAULT: "#EF4444",
                    foreground: "#FFFFFF",
                },
                secondary: {
                    DEFAULT: "#F9FAFB", // surface.bg as secondary roughly
                    foreground: "#111827",
                },
                background: "#FFFFFF",
                foreground: "#111827",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "8px",
                md: "8px",
                full: "9999px",
            },
        },
    },
    plugins: [],
};
export default config;
