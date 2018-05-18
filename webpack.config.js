const webpack = require('webpack')

module.exports = env => {
  const entry = () => {
    switch (env.NODE_ENV) {
      case 'production':
        return ['@babel/polyfill', './src/main']

      default:
        return [
          '@babel/polyfill',
          './src/main',
          `webpack-dev-server/client?http://localhost:${env.PORT || 1337}`
        ]
    }
  }

  const devServer =
    env.NODE_ENV === 'production'
      ? {}
      : {
          contentBase: [`${__dirname}/node_modules/@salesforce-ux/design-system`, './src'],
          port: env.PORT || 1337
        }

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
        }
      ]
    },
    devServer
  }
}
