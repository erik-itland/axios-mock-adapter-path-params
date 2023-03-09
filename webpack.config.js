const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  output: {
    library: "AxiosMockAdapter",
    libraryTarget: "umd",
  },
  externals: {
    axios: "axios",
  },
  // plugins: [new BundleAnalyzerPlugin()],
};

