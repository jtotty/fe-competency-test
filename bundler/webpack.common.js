const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../src/js/app.js'),
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist'),
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            minify: true,
        }),
        new MiniCSSExtractPlugin(),
    ],
    module: {
        rules: [
            // JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },

            // SCSS -> CSS
            {
                test: /\.scss$/,
                use:
                [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },

            // HTML
            {
                test: /\.(html)$/,
                use: ['html-loader'],
            },
        ],
    },
};
