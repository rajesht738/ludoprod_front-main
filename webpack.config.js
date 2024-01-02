const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");
const dotenv = require('dotenv');
const webpack  = require("webpack");
const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:3000/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader","sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|mp3)$/i,
        use: ["file-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "ludo_front",
      filename: "remoteEntry.js",
      remotes: {
        ludo_board: "ludo_board@http://localhost:3005/remoteEntry.js"
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
           requiredVersion: deps.react,
        },
        "react-dom": {
           requiredVersion: deps["react-dom"],
        },
      },
    }),
    // new webpack.DefinePlugin({
    //   'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL),
    //   'process.env.REACT_APP_BACKEND_LOCAL_API': JSON.stringify(process.env.REACT_APP_BACKEND_LOCAL_API),
    //   'process.env.REACT_APP_BACKEND_LIVE_API': JSON.stringify(process.env.REACT_APP_BACKEND_LIVE_API),
     
    // }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed)
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
});
