const { VueLoaderPlugin } = require("vue-loader");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const { ModuleFederationPlugin } = require("webpack").container;


const autoprefixer = require("autoprefixer");
const path = require("path");

module.exports = {
  entry: {
    main: "./src/main.js",
  },
  // devServer: {
  //   contentBase: path.join(__dirname, "dist"),
  //   port: 3000,
  // },
  output: {
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name][contenthash:8].js",
    umdNamedDefine: true,
    publicPath: "http://localhost:3000/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()],
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader",
      },
      {
        test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name][contenthash:8].[ext]",
          outputPath: "assets/img",
          esModule: false,
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash:8].css",
      chunkFilename: "[name][contenthash:8].css",
    }),
    new ModuleFederationPlugin({
      name: "commons",
      library: { type: "var", name: "commons" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        // expose each component
        "./Header": "./src/components/Header.vue",
      },
      shared: ["vue", "vue-router", "vue-loader", "vue-template-compiler"],
    }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: "./public/favicon.ico",
    }),
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
  
};
