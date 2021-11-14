const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

module.exports = {
  mode: 'development',
  devServer: {
    historyApiFallback: true// evita que todas las paginas hagan redirecciones: SPA
  },
  output: {
    filename: 'app.bundle.js',
    publicPath: '/' // al navegar a cualquier rutos, obliga a buscar el bundle en la ruta que se especifica "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    // generates manifest.***.json amd inject by meta tag into index.html on npm run start (dist builder process)
    new WebpackPwaManifest({
      name: 'Animal social network',
      short_name: 'Petgram',
      description: 'share your own pets reference',
      background_color: '#9bd9eb',
      theme_color: '#65cbe9',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'), // this plugin autogenerate all these sizes
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
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
      '@Api': path.resolve(__dirname, 'api/'),
      '@GraphQl': path.resolve(__dirname, 'src/graphQlQueries'),
      '@Pages': path.resolve(__dirname, 'src/pages')
    }
  }
}
