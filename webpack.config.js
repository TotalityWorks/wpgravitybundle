const Dotenv = require("dotenv-webpack")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "./example/src/index.html"),
  filename: "./index.html",
})

module.exports = {
  entry: path.join(__dirname, "./example/src/app.tsx"),
  output: {
    path: path.join(__dirname, "example/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new Dotenv(), htmlWebpackPlugin],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  devServer: {
    port: 3001,
  },
}
