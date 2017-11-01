let htmlWebpackPlugin = require("html-webpack-plugin");
let path = require('path');
module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "bundle.js"
    },
    module: {
        loaders:[
            {
               test:/\.js$/,
               loader:"babel-loader"
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test:/\.vue$/,
                loader:"vue-loader"
            }
        ]
    },
    plugins: [
        new  htmlWebpackPlugin({
            template:"./src/index.html"
        })
    ]
}