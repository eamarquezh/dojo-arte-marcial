/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./src/**/*.{html,js}",
		"./node_modules/tw-elements/dist/js/**/*.js"
	],
	theme: {
		extend: {
		  colors: {
			blue: {
			  1001: '#012e46',
			},
		  }
		},
	  },
	plugins: [
		require('tailwindcss-animated'),
		require("tw-elements/dist/plugin.cjs")
	],
}
