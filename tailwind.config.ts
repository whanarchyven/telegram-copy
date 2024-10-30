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
        cDarkBlue:'#17212B',
        cLightBlue:'#5EB5F7',
        cGray:'#707579',
        cGrayLight:'#E4E4E4',
        cGrayUltraLight:'#F3F3F3',
        cGrayAccent:'#828282',
        cGrayIcon:'#959595',
        cGrayBg:'#F7F7F7',
        cGreen:'#E3FFCA',
        cGreenAccent:'#5ca853'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
export default config;
