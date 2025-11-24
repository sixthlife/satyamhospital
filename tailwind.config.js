module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        Monrope: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#66DBF4",
        secondary: "#021A42",
        tertiary: "#fff",
        quaternary: "#28B6F6",
        quinary: "#F0F5FD",
        senary: "#0857DE",
        septenary: "#9094A3",
      },
      backgroundImage: {
        team: "url(assets/LandingPageAssets/team-background.png)",
        doctorsBackground: "url(assets/DoctorsSliderBackground.png)",
      },
    },
  },
  plugins: [],
};
