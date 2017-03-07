var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');
var extractTextPlugin = require('extract-text-webpack-plugin');

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
                })
            },
            {
                test: /\.less$/,
                loader: extractTextPlugin.extract({
                    fallback: "less-loader",
                    use: ["style-loader","css-loader"]
                })
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'webpack homework',
            template: "./src/index.html"
        }),
        new extractTextPlugin("main.css"),
        new openBrowserPlugin({
            url: "http://localhost:3000"
        })
    ]
};

module.exports = config;