import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", lg: "2rem" }, screens: { "2xl": "1360px" } },
    extend: {
      colors: {
        bone: { 50: "#FAF8F4", 100: "#F7F4EF", 200: "#EFEBE2", 300: "#E4DED1" },
        graphite: { 700: "#2A2A2A", 800: "#1A1A1A", 850: "#151515", 900: "#111111", 950: "#0B0B0B" },
        ink: { DEFAULT: "#1C1B1A", soft: "#3A3937", muted: "#6B6864", subtle: "#9B968F" },
        champagne: { 300: "#E8D6B0", 400: "#D4BC8B", 500: "#B89968", 600: "#947647" },
        steel: { 300: "#CFCFCF", 400: "#A6A6A6", 500: "#7E7E7E" },
        green: {
          50: "#f0faf0", 100: "#dcf0dc", 200: "#b9e0b9", 300: "#8ccc8c",
          400: "#5cb85c", 500: "#3a9a3a", 600: "#2d7d2d", 700: "#246224",
          800: "#1b4a1b", 900: "#123312",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 7vw, 6.25rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 3.5vw, 2.75rem)", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
      },
      borderRadius: { xl2: "1.25rem", "3xl": "1.75rem", "4xl": "2.25rem" },
      boxShadow: {
        soft: "0 1px 2px rgba(20,20,20,0.04), 0 8px 24px -12px rgba(20,20,20,0.08)",
        lift: "0 2px 4px rgba(20,20,20,0.04), 0 24px 48px -20px rgba(20,20,20,0.18)",
        ring: "inset 0 0 0 1px rgba(20,20,20,0.06)",
        "ring-dark": "inset 0 0 0 1px rgba(255,255,255,0.08)",
      },
      transitionTimingFunction: { swift: "cubic-bezier(0.32, 0.72, 0, 1)" },
    },
  },
  plugins: [],
};
export default config;
