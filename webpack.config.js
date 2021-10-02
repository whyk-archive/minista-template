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

const IS_DEV = process.env.NODE_ENV === 'development';

const webpackConfig = {
  entry: './src/assets/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: 2,
              workerParallelJobs: 80,
              workerNodeArgs: ['--max-old-space-size=512'],
              name: 'ts-loader-pool',
            }
          },
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'ts',
              minify: !IS_DEV,
              target: 'es2015',
            },
          }
        ],
      },
      {
        test: /\.tsx$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: 2,
              workerParallelJobs: 80,
              workerNodeArgs: ['--max-old-space-size=512'],
              name: 'tsx-loader-pool',
            }
          },
          {
            loader: 'esbuild-loader',
            options: {
              // loaderはstring型なのでtsとtsxファイルの設定を別々に定義する必要がある
              loader: 'tsx',
              minify: !IS_DEV,
              target: 'es2015',
            },
          }
        ],
      },
    ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [...htmlPluginList],
}

module.exports = webpackConfig