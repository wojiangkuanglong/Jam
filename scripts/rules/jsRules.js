const { resolve } = require('./../utils')
const constants = require('./../constants')
const { cacheLoader } = require('./loaders')

module.exports = [
    {
        test: /\.(j|t)sx?$/,
        include: [resolve('src')],
        use: [
            cacheLoader,
            {
                loader: 'thread-loader',
                options: constants.APP_ENV === 'dev' ? { poolTimeout: Infinity } : {}
            },
            {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [['@babel/preset-env'], '@babel/preset-typescript', '@babel/preset-react'],
                    plugins: [
                        '@babel/plugin-syntax-dynamic-import',
                        ['@babel/plugin-proposal-class-properties', { loose: true }],
                        ['import', { libraryName: 'antd', libraryDirectory: 'lib', style: true }],
                        'react-hot-loader/babel'
                    ]
                }
            }
        ],
        exclude: /node_modules/
    }
]
