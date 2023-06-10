import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));

export default {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Update the test to match TypeScript files (.ts)
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./src/styles/styles.css", to: "" }],
    }),
  ],
};
