module.exports = {
  name: 'vue-slim-modal',
  format: ['umd', 'cjs'],
  moduleName: 'SlimModal',
  jsCompiler: require('rollup-plugin-babel')({
    babelrc: false,
    presets: [['es2015', {modules: false}]],
    plugins: ['transform-vue-jsx'],
    exclude: 'node_modules/**'
  })
}
