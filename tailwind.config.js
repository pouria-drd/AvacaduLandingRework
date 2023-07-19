/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ava-gray": "#80848F",

        "ava-black": "#292D36",

        "perspolis-red": "#C81421",
        "esteghlal-blue": "#1E96FC",

        "ava-green": "#4A7337",
        "ava-light-green": "#DCEAD7",

        "ava-bg-red": "#FEEBF4",
        "ava-bg-blue": "#EBEFFE",
        "ava-bg-green": "#F6FFF8",
        "ava-bg-white": "#F9F7F3",
      },

      fontFamily: {
        tanha: "tanha",
        yekanX: "IRANYekanX",
        iransans: "iransans",
        bjn: "Bahij Nazanin",
        peyda: "Peyda",
      },

      borderRadius: {
        ava8: "8px",
      },
    },
  },
  plugins: [],
};
