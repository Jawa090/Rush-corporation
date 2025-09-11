const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
let CopyWebpackPlugin;
if (isProduction) {
  try {
    CopyWebpackPlugin = require('copy-webpack-plugin');
  } catch (e) {
    // In production builds this should be installed; in dev we don't hard-require it
  }
}

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isProduction ? 'bundle.[contenthash].js' : 'bundle.js',
    publicPath: './',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: (() => {
    const base = [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ];
    if (isProduction && CopyWebpackPlugin) {
      base.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: path.resolve(__dirname, 'public'),
              to: path.resolve(__dirname, 'dist'),
              globOptions: {
                ignore: ['**/index.html'],
              },
              noErrorOnMissing: true,
            },
            {
              from: path.resolve(__dirname, 'public', 'logo1.png'),
              to: path.resolve(__dirname, 'dist', 'favicon.ico'),
              noErrorOnMissing: true,
            },
          ],
        })
      );
    }
    return base;
  })(),
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
