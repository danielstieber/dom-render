const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.js('src/js/app.js', 'js')
	.sass('src/sass/app.scss', 'css')
	.options({
		processCssUrls: false,
		postCss: [ tailwindcss('tailwind.config.js') ],
	})
	.browserSync({
            proxy: 'boilerplate.test',
            files: ['src/**/*', '*.html' , '*.php']
          });