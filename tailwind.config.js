module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    variantes:{
      display: ["group-hover"]
    },
    extend: {
      colors:{
        'sergio-blue': '#024A86'
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}

