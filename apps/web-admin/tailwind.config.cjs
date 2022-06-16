const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontSize: {
				'extra-xs': '.65rem'
			},

			backgroundColor: {
				'icon-button': '#262b3f',

				'input': '#0d0f17',
				'container': '#151820',

				'gradient-01': 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'
			},

			padding: {
				"10%": "10%",
				"20%": "20%",
				"30%": "30%",
				"35%": "35%",
				"40%": "40%",
				"45%": "45%",
				"50%": "50%",
				"60%": "60%",
				"70%": "70%",
				"75%": "75%",
				"80%": "80%",
				"90%": "90%",
				"100%": "100%",
				"110%": "110%",
				"120%": "120%"
			}
		}
	},

	plugins: [
		require('@tailwindcss/typography'),
	],
};

module.exports = config;
