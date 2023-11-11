/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "neutral-1000":"#000",
        "blue-line": "rgba(29, 155, 240, 0.24)",
        "twitter-blue":"#1d9bf0",
        "twitter-blue-hover":"#1871CA",
      },
      padding: {
        "59.1": "14.78125rem",
        "40.4":"10.121rem",
      },

      width: {
        "113.7" :"28.4375rem",
        "34.3":"8.50806rem",
        "83.5":"20.875rem",
        "43":"10.75rem",
      },
      height:{ 
        "36.3":"9.07738rem",
        "49.7":"12.4375rem",
        "0.25":"0.0625rem",
      },
gap:{
  "25": "6.25rem",

},
fontSize:{
  "xs":"1.625rem",
},
    },
    fontFamily:{
      "px-regular":"Inter",
      "px-chirp":"Chirp",
    },
    borderRadius:{
      "md":"1rem",
      "4xl":"6249.9375rem",
      "sm":"1.875rem",
      "lg":"4.0625rem",        
      "xl":"624.9375rem", 
      "2xl":"12.5rem",  
        "l":"0.25rem",  
    },

  },
  plugins: [],
}

