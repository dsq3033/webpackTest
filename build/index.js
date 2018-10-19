const webpack = require("webpack");
const conf = require('../config/conf.js');
const open = require('open');
const WebpackDevServer = require('webpack-dev-server');

const compiler = webpack(conf);

// const devServer = new (compiler, { HOT:true,open:true});
// devServer.listen(8888,function(){
//     open('http://localhost:8888','chrome');
// });
//润鑫
compiler.watch({},function(err,status){
    let info = status.toJson();
    if(!err && !status.hasErrors()){
        console.log("编译完成！");
    } else {
        console.log(info.errors);
    }
});
