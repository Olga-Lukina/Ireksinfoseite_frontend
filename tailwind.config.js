const colors = require('tailwindcss/colors');

module.exports = {
	purge: {
		mode: 'layers',
		content: ['./public/**/*.html', './src/**/*.vue'],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {	
		extend: {
			colors: {
				colors: {       
					gray: '#E4E4E4',
					red: '#96002f',     
				  }  
			},
		},
		/**
     * Breakpoints
     */
		 screens: {
			xs: '480px',
			s: '768px',
			m: '1024px',
			l: '1280px',
			xl: '1440px',
			xxl: '1920px',
		  },
		  /**
     * Font
     */
		  fontFamily: {
			'sans': ['Inter', 'Sans-serif']
		},
		container: {
			padding: {
			  s: '2rem',
			  m: '4rem',
			  l: '5rem',
			  xl: '6rem',
			},
		},
		  fontSize: {
			xs: '.75rem',
			s: ['16px', '24px'],
			l: ['20px', '28px'],
			xl: ['24px', '32px'],
		  },
		
	},
	variants: {
		extend: {},
	},
	plugins: [],
};