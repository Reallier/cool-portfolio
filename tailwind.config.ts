import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bg: "#000000" },
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
};
export default config;
