module.exports = {
  content: ["./src/**/*.{jsx, html}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#AD1FEA",
        secondary: " #4661E6",
        background: "#F7F8FD",
        text: "#3A4374",
        darkBlue: "#373F68",
        white: "#fff",
      },

      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
    },
    spacing: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
      7: "64px",
      8: "80px",
    },
  },
};
