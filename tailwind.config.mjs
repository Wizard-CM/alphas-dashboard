/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary_text_color:"var(--primary-text-color)",
        secondary_text_color:"var(--secondary-text-color)",

        body_bg:"var(--body-bg-color)",
        component_bg:"var(--component-bg-color)",

        theme_color:"var(--theme-color)"
      },
    },
  },
  plugins: [],
};
