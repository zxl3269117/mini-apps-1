const path = require("path");
const webpack = require("webpack");

const SRC_DIR = path.join(__dirname, "/client");
const DIST_DIR = path.join(__dirname, "/public");

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: DIST_DIR,
    filename: "app.js"
  },
  // devServer: {
  //   contentBase: path.join(__dirname, "public/"),
  //   port: 3000,
  //   publicPath: "http://localhost:3000/dist/",
  //   hotOnly: true
  // },
  // plugins: [new webpack.HotModuleReplacementPlugin()]
};