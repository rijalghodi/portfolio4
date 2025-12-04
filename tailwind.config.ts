import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
        },
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          hover: "hsl(var(--primary-hover))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
          hover: "hsl(var(--muted-hover))",
        },
        silent: {
          DEFAULT: "hsl(var(--silent))",
          foreground: "hsl(var(--silent-foreground))",
          hover: "hsl(var(--silent-hover))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
        heading: ["var(--font-grotesk)", ...fontFamily.sans],
      },
      screens: {
        xs: "380px",
      },
      backgroundImage: {
        "dark-image-gradient":
          "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 40%, rgba(0,0,0,0.3) 100%)",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "meteor-effect": "meteor 5s linear infinite",
        "zoom-in-out": "zoom-in-out 2s ease-in-out infinite alternate",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: "1",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
        "zoom-in-out": {
          "0%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "85%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        float: {
          "0%, 100%": {
            transform: "translate(0px, 0px) rotate(0deg)",
          },
          "25%": {
            transform: "translate(10px, -5px) rotate(3deg)",
          },
          "50%": {
            transform: "translate(-10px, 5px) rotate(-3deg)",
          },
          "75%": {
            transform: "translate(5px, 10px) rotate(2deg)",
          },
        },
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};
export default config;
