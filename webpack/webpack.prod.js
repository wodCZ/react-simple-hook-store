const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const path = require('path');

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  entry: './src/index.ts',
  output: {
    filename: 'react-simple-hook-store.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'simpleHookStore',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  mode: 'production',
  externals: {
    "react": "react",
    "react-dom": "reactDOM"
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
        exclude: "/node_modules/"
      },
      {
        enforce: "pre",
        test: /\.tsx?$/,
        use: "source-map-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              happyPackMode: true
            }
          }
        ],
        exclude: /node_modules/
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true
      })
    ],
  },
};
