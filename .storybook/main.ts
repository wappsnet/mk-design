import type { StorybookConfig } from '@storybook/react-webpack5';
import * as path from 'path';

const paths = {
  root: path.resolve(__dirname, '../', 'src'),
};

const config: StorybookConfig = {
  stories: [`${paths.root}/**/*.stories.@(js|jsx|ts|tsx|mdx)`],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react-webpack5',
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  webpackFinal: (config) => {
    if (!config.resolve) {
      config.resolve = {};
    }

    if (!config.module) {
      config.module = {};
    }

    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.resolve.alias = {
      stories: path.resolve(paths.root, 'stories'),
      core: path.resolve(paths.root, 'core'),
      definitions: path.resolve(paths.root, 'definitions'),
      components: path.resolve(paths.root, 'components'),
      helpers: path.resolve(paths.root, 'helpers'),
      hooks: path.resolve(paths.root, 'hooks'),
      theme: path.resolve(paths.root, 'theme'),
      types: path.resolve(paths.root, 'types'),
      assets: path.resolve(paths.root, 'assets'),
    };

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'file-loader', 'url-loader'],
    });

    return config;
  },
  docs: {
    autodocs: true,
    docsMode: false,
  },
};

export default config;
