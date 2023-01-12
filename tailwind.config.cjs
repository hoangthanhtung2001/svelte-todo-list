/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [],
  theme: {
		extend: {
			colors: {
				background: "#121212",
				"secondary-background": "#212121",
				primary: "#272AB0",
				secondary: "#212265",
				alt: "#202033",
			},
		},
	},
content: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
variants: {
  extend: {},
},
}
