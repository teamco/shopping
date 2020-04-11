const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const meteorExternals = require('webpack-meteor-externals');
const clientConfig = {
  entry: [
    'react-hot-loader/patch',
    './client/main.jsx'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        // 'react-hot-loader/webpack',
        loaders: ['react-hot-loader/webpack', 'babel-loader?presets[]=@babel/preset-env&presets[]=@babel/preset-react']
      },
      {
        test: /\.less$/,
        loader: 'less-loader' // compiles Less to CSS
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      // {
      //   test: /\.html$/,
      //   loader: 'file-loader?name=[name].[ext]'
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/main.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  externals: [
    meteorExternals()
  ]
};
const serverConfig = {
  entry: [
    './server/main.js'
  ],
  target: 'node',
  externals: [
    meteorExternals()
  ]
};
module.exports = [clientConfig, serverConfig];