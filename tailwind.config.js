/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {
      
      backgroundImage: {
        'lady': "url('/src/assets/BoltBackground.jpg')",
      },

      fontFamily: {
        'DM-sans': ['Duplicate Sans','DM-Sans', 'sans-serif'],
      },
    
      screens: {
        md: { min: "416px", max: "800px" },

        sm: { max: "415px" }
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

