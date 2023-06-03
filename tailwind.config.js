/** @type {import('tailwindcss').Config} */
import { mauve, violet, blackA } from "@radix-ui/colors";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...mauve,
        ...violet,
        ...blackA,
      },
      fontFamily: {
        sans: ["Inter var", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
