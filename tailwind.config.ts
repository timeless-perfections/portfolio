import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      "#080808",
        surface: "rgba(224,224,224,0.03)",
        red:     "#CC1F1F",
        "red-light": "#FF3333",
        text:    "#E0E0E0",
        muted:   "rgba(224,224,224,0.45)",
        muted2:  "rgba(224,224,224,0.28)",
        border:  "rgba(224,224,224,0.08)",
      },
      fontFamily: {
        sans:    ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
