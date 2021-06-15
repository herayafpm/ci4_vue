require("dotenv").config({ path: __dirname + "/../.env" });
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: process.env.baseURL,
      },
    },
  },
  indexPath:
    process.env.CI_ENVIRONMENT === "production"
      ? "../app/Views/index.php"
      : "index.html",
  outputDir: "../public/",
  pwa: {
    workboxOptions: {
      exclude: [".htaccess"],
    },
  },
};
