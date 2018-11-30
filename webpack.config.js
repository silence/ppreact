const webpack = require('webpack')
const path = require('path')

const rootpath = path.resolve(__dirname)

module.exports = {
    entry: path.resolve(rootpath, 'test', 'index.js'),
    mode: 'development',
    devtools: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: 'ppreact.js',
        path: path.resolve(rootPath, 'dist'),
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}
