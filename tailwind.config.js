/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			colors: {
				ink: '#000',
				canvas: '#fff',

				accent: '#000',
			},
		},
	},
	plugins: [],
}
