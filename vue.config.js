module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Vue Web Forms Demo',
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/roadside-forms/' : '/',
  runtimeCompiler: true,
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js",
      importWorkboxFrom: 'local'
    }
  }
}