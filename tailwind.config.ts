import type { Config } from "tailwindcss";

const config = {
  // darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: "var(--primary)",
        span: "#969DB0",
      },
      backgroundImage: {
        divider:
          "linear-gradient(270deg, rgba(163, 177, 194, 0.00) 28.87%, #A3B1C2 45.39%, #A3B1C2 53.54%, rgba(163, 177, 194, 0.00) 70.06%)",
        title:
          "linear-gradient(180deg, #FFF 22.5%, rgba(255, 255, 255, 0.70) 100%)",
        "blue-gradient": "linear-gradient(180deg, #396FFD 0%, #0744E6 100%)",
        lightning:
          "radial-gradient(33.21% 54.43% at 50% 50%, #0e1d42 0%, rgba(102, 117, 255, 0.00) 100%), #010618",
        input:
          "radial-gradient(89.06% 89.06% at 50% 50%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.00) 48.41%), linear-gradient(0deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.04) 100%), #010718",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
