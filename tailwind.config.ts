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
        "fade-in": {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "none" },
        },
        "image-rotate": {
          "0%": { transform: "rotateX(25deg)" },
          "25%": { transform: "rotateX(25deg) scale(0.9)" },
          "60%": { transform: "none" },
          "100%": { transform: "none" },
        },
        "image-glow": {
          "0%": {
            opacity: "0",
            "animation-timing-function": "cubic-bezier(0.74,0.25,0.76,1)",
          },
          "10%": {
            opacity: "1",
            "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
          },
          "100%": {
            opacity: "0.7",
            // "animation-timing-function": "cubic-bezier(0.12,0.01,0.08,0.99)",
          },
        },
        "sketch-lines": {
          "0%": { "stroke-dashoffset": "1" },
          "50%": { "stroke-dashoffset": "0" },
          "99%": { "stroke-dashoffset": "0" },
          "100%": { visiblity: "hidden" },
        },
        "glow-line-horizontal": {
          "0%": { opacity: "0", transform: "translateX(0)" },
          "5%": { opacity: "1", transform: "translateX(0)" },
          "90%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateX(min(60vw, 45rem))" },
        },
        "glow-line-vertical": {
          "0%": { opacity: "0", transform: "translateY(0)" },
          "5%": { opacity: "1", transform: "translateY(0)" },
          "90%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(min(21vw, 45rem))" },
        },
        zap: {
          "0%, 9%, 11%, 100% ": {
            fill: "transparent",
          },
          "10%": {
            fill: "white",
          },
        },
        bounce: {
          "50%": {
            transform: "scale(0.98)",
          },
        },
        "slide-right": {
          from: {
            transform: "translateX(-50%)",
          },
          to: {
            transform: "translateX(0)",
          },
        },
        "slide-left": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-50%)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 1000ms var(--animation-delay, 0ms) ease forwards",
        "image-rotate": "image-rotate 1400ms ease forwards",
        "image-glow": "image-glow 4100ms 600ms ease-out forwards",
        "sketch-lines": "sketch-lines 1200ms ease-out forwards",
        "glow-line-horizontal":
          "glow-line-horizontal var(--animation-duration) ease-in forwards",
        "glow-line-vertical":
          "glow-line-vertical var(--animation-duration) ease-in forwards",
        zap: "zap 2250ms calc(var(--index) * 20ms) linear infinite",
        bounce: "240ms ease 0s 1 running bounce",
        "slide-left": "20s slide-left infinite linear",
        "slide-right": "20s slide-right infinite linear",
      },
      colors: {
        primary: "var(--primary)",
        span: "#969DB0",
      },
      boxShadow: {
        secondary: "#658af1 0px 1px 40px",
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
        "hero-glow":
          "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
