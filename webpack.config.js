const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: 'single'
  };
  if (isProd) {
    config.minimizer = [
      new CssMinimizerWebpackPlugin(),
      new TerserWebpackPlugin()
    ];
  }
  return config;
};

const fileName = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = (extra) => {
  const loaders = [MiniCssExtractPlugin.loader, 'css-loader'];
  if (extra !== undefined && extra !== null) {
    loaders.push(extra);
  }
  return loaders;
};

const babelOptions = (preset) => {
  const options = {
    presets: ['@babel/preset-env']
  };
  if (preset) {
    options.presets.push(preset);
  }
  return options;
};

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: fileName('css')
    })
  ];
  if (isProd) {
    base.push(new BundleAnalyzerPlugin());
  }
  return base;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', './index.jsx'],
  },
  output: {
    clean: true,
    filename: fileName('js'),
    path: path.resolve(__dirname, 'dist')
  },
  plugins: plugins(),
  optimization: optimization(),
  devServer: {
    port: 4200,
    watchFiles: [path.join(__dirname, 'src/*.html')]
  },
  devtool: isDev ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /\.(jpeg|png|gif|svg)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(ttf|woff|woff2|oet)$/,
        type: 'asset/resource'
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions()
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-typescript')
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react')
        }
      }
    ]
  }
};
