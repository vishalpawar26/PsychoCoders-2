import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "eerie-black": "#1a1a1a",
        jet: "#2A2A2A",
        "davy-gray": "#595959",
        "off-white": "#f5f5f5",
        "orange-peel": "#ffa116",
        "dark-pastel-green": "#28c244",
        folly: "#ff375f",
      },
    },
  },
  plugins: [],
};
export default config;
