const path = require('path');

module.exports = {
    entry: './public/src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public/dist'),
        publicPath: 'public/dist/'
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: (url, resourcePath) => 
                            url.match(/\.(png|jpg|jpeg|gif|svg)$/) &&
                                `images/${url}` ||
                                `fonts/${url}`
                    },
                }
            },
            {
                test: /\.(scss)$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            }
        ]
    },
    // watch: true
}