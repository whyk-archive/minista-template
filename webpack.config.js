const path = require('path')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPluginList = glob.sync('**/*.tsx', {cwd: 'src/pages'}).map((file) => {
  const extname = path.extname(file)
  const basename = path.basename(file, extname)
  const dirname = path.dirname(file)

  return new HtmlWebpackPlugin({
    template: path.resolve('src/pages', file),
    filename: path.join(dirname, basename + '.html'),
  })
})

const webpackConfig = {
  entry: './src/assets/index.ts',
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/, /\.js$/],
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [...htmlPluginList],
}

module.exports = webpackConfig