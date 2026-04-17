import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "../../apps/*/src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#1A1A24",
        panel: "#252634",
        elevated: "#2D2E42",
        primary: "#00E5FF",
        secondary: "#8A2BE2",
        attention: "#FF6B6B"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "Roboto Mono", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;