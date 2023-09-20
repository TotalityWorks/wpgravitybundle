const path = require("path")
const DeclarationBundlerPlugin = require("types-webpack-bundler")

module.exports = {
  entry: path.join(__dirname, "./src/index.ts"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
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
  plugins: [
    new DeclarationBundlerPlugin({
      moduleName: `"wpgravitybundle"`,
      out: "index.d.ts",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  externals: {
    react: "commonjs react",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
}
