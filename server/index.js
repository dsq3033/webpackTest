'use strict';
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const baseConfig = require('../config/conf.js');
const config = merge(baseConfig,require('../config/dev.conf'));
const open = require('open');

const app = express(),
      DIST_DIR = path.join(__dirname, "dist");

const compiler = webpack(config);

let devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    quiet: false //向控制台显示任何内容
});

let hotMiddleware = webpackHotMiddleware(compiler,{
    log: false,
    heartbeat: 2000,
});
app.use(devMiddleware);
app.use(hotMiddleware);

app.use(express.static(DIST_DIR))

app.listen(8080,function(){
    open('http://localhost:8080',"chrome");
    console.log("port: 8080");
});
