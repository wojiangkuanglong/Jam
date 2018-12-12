const { resolve } = require('./../utils')

module.exports = [
    {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        query: {
            limit: 10000,
            name: 'img/[name].[hash:7].[ext]',
            publicPath: '/',
        }
    },
    {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]',
            publicPath: '/',
        }
    },
    {
        test: /\.svg$/,
        loader: '@svgr/webpack',
        include: [resolve('src')]
    }
]
