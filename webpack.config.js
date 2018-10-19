const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    entry: path.resolve(__dirname,'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/')
    },
    module : {
        rules : [{
            test : /\.(js|jsx)$/,
            use : 'babel-loader'
        },{
            test : /\.(css|scss|less)$/,
            use : ['style-loader','css-loader']
        }]
    }
};
module.exports = config;
