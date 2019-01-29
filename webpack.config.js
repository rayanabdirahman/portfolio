const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode }) => {
  return {
    mode,
    output: {
      filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin()]
  };
};