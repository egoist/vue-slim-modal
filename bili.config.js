module.exports = {
  name: 'vue-slim-modal',
  format: ['umd', 'cjs'],
  moduleName: 'SlimModal',
  compress: true,
  jsCompiler: require('rollup-plugin-babel')({
    presets: [['es2015', {modules: false}]],
    plugins: ['transform-vue-jsx'],
    exclude: 'node_modules/**'
  })
}
