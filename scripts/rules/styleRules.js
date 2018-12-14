const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = require('./../config')
const { resolve } = require('./../utils')
const theme = require('./../../theme')

const sassLoader = {
    loader: 'sass-loader',
    options: {
        includePaths: [resolve('src/styles')]
    }
}

const lessLoader = {
    loader: 'less-loader',
    options: {
        javascriptEnabled: true,
        modifyVars: theme
    }
}

const cacheLoader = {
    loader: 'cache-loader',
    options: {
        cacheDirectory: resolve('.cache-loader')
    }
}

module.exports = [
    {
        test: /\.css$/,
        include: [resolve('node_modules')],
        use: [
            config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
            cacheLoader,
            'css-loader',
            'postcss-loader'
        ]
    },
    {
        test: /\.scss$/,
        include: [resolve('src')],
        rules: [
            {
                use: [
                    config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    sassLoader
                ]
            }
        ]
    },
    {
        // for ant design
        test: /\.less$/,
        rules: [
            {
                use: [
                    config.extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'postcss-loader',
                    lessLoader
                ]
            }
        ]
    }
]
