import path from "path";
import { fileURLToPath } from "url";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
  mode: "production",
  entry: "./task19.js",
  devtool: "source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif|webp)$/,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
  ],

  optimization: {
      minimizer: ["...", new CssMinimizerPlugin()],
      
      
  },
};
