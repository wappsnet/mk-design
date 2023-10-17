import * as path from 'path';

const paths = {
  root: path.resolve(__dirname, '../'),
  source: path.resolve(__dirname, '../', 'src'),
};

export default {
  stories: [`${paths.source}/**/*.stories.@(js|jsx|ts|tsx|mdx)`],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react-webpack5',
  webpack: async (config) => {
    if (!config.resolve) {
      config.resolve = {};
    }

    if (!config.module) {
      config.module = {};
    }

    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.resolve.modules = [paths.source, path.resolve(paths.root, './node_modules')];

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    return config;
  },
  docs: {
    autodocs: true,
    docsMode: false,
  },
};