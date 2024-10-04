const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [path.join(__dirname, '/src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['.ts', '.jsx', '.tsx', "..."],
  },
  devServer: {
    historyApiFallback: true,
    static: {
     directory: path.join(__dirname, "/"),
   },
    port: 8081,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ts)x?$/,
        exclude: /node_modules|\.d\.ts$/, // this line as well
        use: {
          loader: 'ts-loader',
          options: {
          compilerOptions: {
          noEmit: false, // this option will solve the issue
         },
        },
       },
      },
      {
        test: /\.css|scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      // favicon: "./src/logo.svg"
    }),
  ],
};