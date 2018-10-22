const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        index: ['webpack-hot-middleware/client?noInfo=true&reload=true',path.resolve(__dirname, '../src/index.js')]
    },
    mode: 'development',
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin()
    ]
}
