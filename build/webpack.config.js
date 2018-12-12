const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const config = require('./config')
const constants = require('./constants')
const styleRules = require('./rules/styleRules')
const jsRules = require('./rules/jsRules')
const fileRules = require('./rules/fileRules')
const plugins = require('./plugins')
const { assetsPath, resolve } = require('./utils')
const optimization = require('./optimization')
require('./cleanup-folder')

module.exports = {
    entry: {
        vendor: ['@babel/polyfill'],
        app: ['./src/index.tsx']
    },
    output: {
        path: config.assetsRoot,
        filename: constants.APP_ENV === 'dev' ? '[name].js' : assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: constants.APP_ENV === 'dev' ? '[name].js' : assetsPath('js/[name].[id].[chunkhash].js'),
        publicPath: config.assetsPublicPath
    },
    resolve: {
        extensions: constants.FILE_EXTENSIONS,
        modules: [resolve('src'), resolve('node_modules')],
        alias: {},
        plugins: [
            new TsconfigPathsPlugin({
                configFile: resolve('tsconfig.webpack.json'),
                extensions: constants.FILE_EXTENSIONS
            })
        ]
    },
    module: {
        rules: [...styleRules, ...jsRules, ...fileRules]
    },
    plugins,
    devServer: {
      contentBase: resolve('src'),
      historyApiFallback: true, // 解决brower histroy刷新404
      port: 9527,
      host: "0.0.0.0",
    },
    optimization,
    stats: { children: false },
    devtool: config.sourceMap ? 'cheap-module-source-map' : 'cheap-module-eval-source-map'
}
