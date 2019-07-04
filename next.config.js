const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

module.exports = withSass(
  withCSS({
    target: "serverless",
    webpack(config) {
      config.module.rules.push({
        test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
            publicPath: "/_next/static/",
            outputPath: "static/",
            name: "[name].[ext]"
          }
        }
      });
      return config;
    }
  })
);
