import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#06133b",
          900: "#0b1f63",
          800: "#133c99",
          700: "#255dd6"
        },
        aqua: {
          50: "#eff8ff",
          100: "#dff1ff",
          200: "#c1e2ff",
          300: "#92c8ff",
          400: "#5aa4ff",
          500: "#2e79ea",
          600: "#1c56bf"
        },
        gold: {
          300: "#ffe27d",
          400: "#f7c33f",
          500: "#d79a13"
        },
        sun: {
          300: "#ffb647",
          400: "#ff921f",
          500: "#f26d05",
          600: "#c95300"
        }
      },
      fontFamily: {
        display: ['"Avenir Next Condensed"', '"Arial Narrow"', "sans-serif"],
        body: ['"Avenir Next"', '"Segoe UI"', "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(8, 27, 51, 0.12)",
        hero: "0 28px 80px rgba(4, 18, 36, 0.35)",
        glow: "0 18px 52px rgba(242, 109, 5, 0.28)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        drift: {
          "0%, 100%": { transform: "translate3d(-8px, 0, 0)" },
          "50%": { transform: "translate3d(12px, -12px, 0)" }
        },
        shine: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-delayed": "float 8.5s ease-in-out 1.4s infinite",
        drift: "drift 18s ease-in-out infinite",
        shine: "shine 12s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
