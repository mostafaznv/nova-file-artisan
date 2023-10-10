const mix = require('laravel-mix')
const webpack = require("webpack")

require('./nova.mix')

mix.setPublicPath('dist')
    .js('resources/js/field.js', '')
    .sass('resources/scss/field.scss', '')
    .vue({
        version: 3,
        options: {
            compilerOptions: {
                isCustomElement: (tag) => tag.startsWith('media-')
            }
        }
    })
    .webpackConfig({
        plugins: [
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1,
            }),
        ]
    })
    .nova('mostafaznv/nova-larupload')

if (mix.inProduction()) {
    mix.version()
}
