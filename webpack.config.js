const ESLintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.ts',
  mode: 'production',
  plugins: [
    new ESLintPlugin({
      failOnError: true,
      failOnWarning: true,
      emitError: true,
      emitWarning: true,
      useEslintrc: true,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'assets',
          to: 'assets',
        },
        {
          from: 'theme',
          to: 'theme',
        },
        {
          from: './**/*.scss',
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
        type: 'asset',
        generator: {
          outputPath: 'media',
          filename: '[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
    alias: {
      definitions: path.resolve(__dirname, 'src/definitions'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      core: path.resolve(__dirname, 'src/core'),
      types: path.resolve(__dirname, 'src/types'),
      theme: path.resolve(__dirname, 'src/theme'),
      components: path.resolve(__dirname, 'src/components'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      assets: path.resolve(__dirname, 'src/assets'),
    },
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
