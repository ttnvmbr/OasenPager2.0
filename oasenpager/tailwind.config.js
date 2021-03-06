module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          oasen: "var(--oasen-blue)",
          oasenDark: "var(--oasen-blue-dark)",
        },
      },
      fontFamily: {
        strada: ["strada", "sans-serif"],
      },
    },
  },
  screens: {
    sm: "375px",
    md: "768px",
    lg: "1024px",
    xl: "1440px",
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
