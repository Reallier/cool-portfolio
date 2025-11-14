import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#F5F7FA",
        "page-section": "#EEF2FF",
        surface: "#FFFFFF",
        "primary-blue": "#2563EB",
        "primary-cyan": "#06B6D4",
        "border-subtle": "#E2E8F0",
        "border-strong": "#CBD5F5",
        "text-main": "#0F172A",
        "text-muted": "#475569",
        "text-soft": "#6B7280",
      },
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
};
export default config;
