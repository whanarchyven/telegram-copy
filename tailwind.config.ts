import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        sf:['SF Pro Display']
      },
      colors:{
        cBlue:'#0E76F1',
        cGray:'#707579',
        cGrayLight:'#e4e4e4',
        cGreen:'#E3FFCA',
        cGreenAccent:'#5ca853'
      }
    },
  },
  plugins: [],
};
export default config;
