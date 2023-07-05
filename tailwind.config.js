export default {
  plugins: [require("daisyui")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui:{
    themes:["dark"],
  },
  theme: {
   
    colors: {
      completed: "#bedfc8",
      building: "#f8e9b9",
      soon: "#f7cbc4",
      "projects-title": "#1c1c1e",
      "grey-it": "#7e7e7e",
      "backOffice-main":"#EBEBEB"
    },
    extend: {},
  }
  
};
