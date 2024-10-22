import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: 'Montserrat'
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'text-gradient': "linear-gradient(98deg, rgba(84, 226, 98, 1) 0%, rgba(139, 148, 136, 1) 47%, rgba(27, 196, 25, 1) 100%)",
        'background-gradient': "linear-gradient(89deg, rgba(191, 211, 193, 1) 0%, rgba(255, 255, 255, 1) 100%)"
      }
    },
  },
  plugins: [],
};
export default config;
