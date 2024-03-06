import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '4px',
      '4': '16px',
      '6': '24px',
      '8': '32px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        beige: "#FCD59B",
        beigelight: "#FFF1DC",
        teallight: "#C1ECE4",
        fleshlight: "#FFD0D0",
        tealdark: "#05BFDB",
        fleshdark: "#FF9EAA",
      },
    },
    fontFamily: {
      josefinSans: ["Josefin Sans", "sans-serif"],
      ubuntu: ["Ubuntu", "sans-serif"],
      spaceGrotesk: ["Space Grotesk", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
