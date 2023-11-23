const ESLintPlugin = require('eslint-webpack-plugin');

const path = require('path');
const config = require('./tsconfig.json');

module.exports = {
  context: path.resolve(__dirname, config.compilerOptions.baseUrl),
  entry: './index.ts',
  mode: 'production',
  plugins: [
    new ESLintPlugin({
      failOnError: true,
      failOnWarning: true,
      emitError: true,
      emitWarning: true,
      useEslintrc: true,
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
        type: 'asset',
        generator: {
          filename: '[path][name].[ext]',
        },
      },
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  resolve: {
    modules: [path.resolve(__dirname, config.compilerOptions.baseUrl), path.resolve(__dirname, './node_modules')],
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    library: '$',
    filename: 'index.js',
    path: path.resolve(__dirname, config.compilerOptions.outDir),
    clean: true,
  },
};
