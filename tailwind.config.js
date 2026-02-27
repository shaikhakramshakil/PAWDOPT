/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:          "#FFF9F6",
        sidebar:     "#FFF1E8",
        card:        "#FFFFFF",
        coral:       "#FF9AA2",
        mint:        "#B5EAD7",
        lavender:    "#C7CEEA",
        softYellow:  "#FFF5BA",
        success:     "#8ED1A6",
        warning:     "#FFD6A5",
        danger:      "#FF8C94",
        textPrimary: "#2D2D2D",
        textSec:     "#5A5A5A",
        textMuted:   "#8A8A8A",
      },
      borderRadius: {
        "2xl": "20px",
        "3xl": "24px",
        full:  "9999px",
      },
      boxShadow: {
        card:  "0 10px 30px rgba(255,182,193,0.12)",
        btn:   "0 6px 16px rgba(255,154,162,0.30)",
        nav:   "0 2px 12px rgba(255,182,193,0.15)",
        float: "0 8px 24px rgba(255,182,193,0.25)",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      backgroundImage: {
        "btn-gradient":  "linear-gradient(135deg,#FF9AA2,#FFD6A5)",
        "bar-gradient":  "linear-gradient(90deg,#FF9AA2,#FFD6A5)",
        "hero-gradient": "linear-gradient(135deg,#C7CEEA 0%,#FFD6A5 100%)",
        "card-lavender": "linear-gradient(135deg,#C7CEEA 0%,#E8DBFF 100%)",
        "card-peach":    "linear-gradient(135deg,#FFD6A5 0%,#FF9AA2 100%)",
        "card-mint":     "linear-gradient(135deg,#B5EAD7 0%,#C7F2E0 100%)",
      },
      keyframes: {
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "bounce-soft": {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-4px)" },
        },
      },
      animation: {
        shimmer:      "shimmer 2s linear infinite",
        "bounce-soft": "bounce-soft 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
};
