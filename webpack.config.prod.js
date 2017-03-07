var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;

var config = {
    entry: path.resolve(__dirname, "./src/index.js"),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js?[hash:6]'
    },
    devServer: {
        contentBase: 'dist',
        inline: true,
        port: 3000,
        stats: {
            colors: true
        }
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "node_modules"
            },
            {
                test: /\.css$/,
                loader: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
                include: path.resolve(__dirname, 'src')
            },
            {
                test: /\.less/,
                loader: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","less-loader"]
                }),
                include: path.resolve(__dirname, 'src')
            }
        ],
        rules: [

        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'webpack homework',
            template: "./src/index.html"
        }),
        new extractTextPlugin("main.css"),
        new uglifyPlugin({
            compress: false
        })
    ]
};

module.exports = config;