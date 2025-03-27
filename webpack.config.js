const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|svg|jpeg|webp|gif|avif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.ttf$/i,
                type: "asset/resource"
            }
        ]
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/template.html"]
    },

}