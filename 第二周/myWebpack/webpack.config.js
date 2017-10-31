var path = require("path");
module.exports = {
    /*指定入口文件*/
    entry:path.resolve(__dirname,"src/index.js"),
    output:{
        /*出口文件的路径*/
        path:path.resolve(__dirname,"build"),
        /*合并后的文件名*/
        filename:"bundle.js"
    },
    module: {
        loaders:[ // 一系列的加载器
            {
                test:/\.js$/,
                loader:"babel-loader"
            }
        ]
    },
    devServer: {
            stats: { colors: true }, //显示颜色
            port: 9095,//端口
            contentBase: 'build',//指定静态文件的根目录
        }
}