const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-throw-expressions', '@babel/plugin-syntax-dynamic-import']
        }
      }
    }]
  },
  resolve: {
    alias: {
      '@Components': path.resolve(__dirname, 'src/components/'),
      '@Hooks': path.resolve(__dirname, 'src/hooks/'),
      '@Providers': path.resolve(__dirname, 'src/providers/'),
      '@Api': path.resolve(__dirname, 'api/')
    }
  }
}
