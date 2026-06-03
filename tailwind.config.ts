import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#E8500A",
          "orange-light": "#F4733A",
          "orange-dark": "#C43D00",
          cream: "#F5F0E8",
          "cream-dark": "#EDE8DF",
          green: "#2D7A3A",
        },
        gov: {
          navy: "#1A2B5F",
          "navy-light": "#2A3F7F",
        },
      },
      fontFamily: {
        sans: ["'Google Sans Flex'", "'Google Sans'", "sans-serif"],
        hindi: ["var(--font-noto-sans-devanagari)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
