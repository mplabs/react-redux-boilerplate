const webpack = require('webpack')

module.exports = env => {
  const entry = () => {
    switch (env.NODE_ENV) {
      case 'production':
        return [
          '@babel/polyfill',
          `${__dirname}/node_modules/normalize.css`,
          './src/theme/main.scss',
          './src/main'
        ]

      default:
        return [
          '@babel/polyfill',
          `${__dirname}/node_modules/normalize.css`,
          './src/theme/main.scss',
          './src/main',
          `webpack-dev-server/client?http://localhost:${env.PORT || 1337}`
        ]
    }
  }

  const devServer =
    env.NODE_ENV !== 'production'
      ? {
          contentBase: ['./src'],
          port: env.PORT || 1337
        }
      : {}

  return {
    entry: entry(),
    output: {
      publicPath: '/',
      filename: 'main.js'
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [`${__dirname}/src`],
          exclude: [`${__dirname}/node_modules`],
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-stage-0', { decoratorsLegacy: true }]
              ],
              plugins: [
                '@babel/plugin-transform-runtime',
                '@babel/plugin-transform-react-jsx'
              ]
            }
          }
        },
        {
          test: /\.html$/,
          use: {
            loader: 'file-loader?name=[name].[ext]'
          }
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader!postcss-loader'
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!postcss-loader!sass-loader'
        }
      ]
    },
    devServer
  }
}
