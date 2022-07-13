const { VueLoaderPlugin } = require('vue-loader');

module.exports = config => {
  config.module.rules = [
    {
      test: /.vue$/,
      loader: 'vue-loader'
    },
    ...config.module.rules
  ]
  config.plugins = [
    ...config.plugins,
    new VueLoaderPlugin()
  ]
  return config
}