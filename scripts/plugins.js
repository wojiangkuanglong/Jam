const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const MomentLocalesPlugin = require('moment-locales-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')

const constants = require('./constants')
const config = require('./config')
const { assetsPath } = require('./utils')
const env = require('./env.json')

const oriEnv = env[constants.APP_ENV]
Object.assign(oriEnv, {
    APP_ENV: constants.APP_ENV
})
// 配置全局常量，将webpack下发变量置于process.env
const defineEnv = {}
for (let key in oriEnv) {
    defineEnv[`process.env.${key}`] = JSON.stringify(oriEnv[key])
}

const basePlugins = [
    new webpack.DefinePlugin(defineEnv),
    new MomentLocalesPlugin({
        localesToKeep: ['es-us', 'zh-cn']
    })
]

const devPlugins = [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'scripts/tpl/index.html',
        inject: true // 注入body
    }),
    new CaseSensitivePathsPlugin() // 解决linux下编译路径大小写问题
]

const prodPlugins = [
    new webpack.WatchIgnorePlugin([/css\.d\.ts$/]), // 符合条件的文件将不会被监视，不会触发重编译
    new HtmlWebpackPlugin({
        filename: config.index,
        template: 'scripts/tpl/index.html',
        inject: true,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
        },
        chunksSortMode: 'dependency'
    }),
    new MiniCssExtractPlugin({
        filename: assetsPath('css/[name].[hash].css'),
        chunkFilename: assetsPath('css/[name].[id].[hash].css')
    })
]

if (config.bundleAnalyzerReport) {
    const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
    prodPlugins.push(new BundleAnalyzerPlugin())
}

module.exports = basePlugins.concat(constants.APP_ENV === 'dev' ? devPlugins : prodPlugins)
