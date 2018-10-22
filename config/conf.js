const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: path.resolve(__dirname,'../src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/')
    },
    mode : 'production',
    module : {
        rules : [{
            test : /\.(js|jsx)$/,
            use : 'babel-loader'
        },{
            test : /\.(css|scss|less)$/,
            use : ['style-loader','css-loader']
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            title : "myTest"
        })
    ]
};
module.exports = config;
