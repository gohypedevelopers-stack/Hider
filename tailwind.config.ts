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
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          dark: "#000000",
          beige: "#F5F5DC", // Light beige placeholder
          light: "#FFFFFF"
        }
      },
      fontFamily: {
        playfair: ["var(--font-heading)", "serif"],
        poppins: ["var(--font-body)", "sans-serif"],
      }
    },
  },
  plugins: [],
};
export default config;
