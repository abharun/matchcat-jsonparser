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
      },
      screens: {
        enterprise: { min: "1621px" },
        desktop: { max: "1620px", min: "1441px" },
        laptop: { max: "1440px", min: "1025px" },
        tablet: { max: "1024px", min: "426px" },
        mobile: { max: "425px" },
      },
    },
  },
  plugins: [],
};
export default config;
