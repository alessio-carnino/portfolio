/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "blue-title": "#1E0E62",
        "blue-text": "#212733",
        "gradient-start": "#4E65FF",
        "gradient-end": "#92EFFD",
      },
      fontSize: {
        "5.5xl": "3.5rem",
      },
      fontFamily: {
        maven_pro: ["Maven_Pro", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },

      width: {
        "1218px": "76.125rem",
        "1420px": "88.75rem",
      },
      maxWidth: {
        "86%": "86%",
      },
    },
  },
  plugins: [],
};
