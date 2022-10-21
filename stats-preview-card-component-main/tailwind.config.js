const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{html,js}', './public/*.html'],
	theme: {
		extend: {
			width: {
				128: '90rem',
				1110: '69.375rem',
				403: '25.188rem',
				403: '25.188rem',
			},
			height: {
				800: '50rem',
				446: '27.875rem',
				88: '5.5rem',
				956: '59.75rem',
				780: '45rem',
			},
			inset: {
				'1114px': '1114px',
				'2460px': '2460px',
				'165px': '165px',
				'177px': '177px',
				'237px': '237px',
				'248px': '248px',
				'300px': '300px',
			},
			colors: {
				'dark-blue': '#0A0C1C',
				'dark-purple': '#1B1937',
				'light-purple': '#AB5CDB',
			},
		},
	},
	plugins: [],
};
