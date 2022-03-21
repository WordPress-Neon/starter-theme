const mix = require('laravel-mix')

mix.js('resources/js/app.js', 'assets/js')
    .sass('resources/scss/app.scss', 'assets/css')
    .webpackConfig(require('./webpack.config'))
    .options({
        processCssUrls: false,
        postCss: [
            require('postcss-import'),
            require('tailwindcss'),
            require('autoprefixer')
        ],
    })