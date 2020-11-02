const path = require('path');
const HtmllWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.experts = {
  entry: "./src/js/index.js",
  output: {
    filename: "main.js"
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmllWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader[Symbol],
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader'
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        user: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel-preset-env']
          }
        }
      }
    ]
  }
}