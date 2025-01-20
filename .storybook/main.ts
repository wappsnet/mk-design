import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const paths = {
  root: path.resolve(__dirname, '../'),
  source: path.resolve(__dirname, '../src'),
  modules: path.resolve(__dirname, '../node_modules'),
};

const config: StorybookConfig = {
  stories: [`${paths.source}/**/*.doc.mdx`, `${paths.source}/**/*.stories.@(js|jsx|ts|tsx)`],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-designs',
    '@storybook/addon-webpack5-compiler-babel',
  ],

  webpackFinal: async (config) => {
    config.resolve?.modules?.push(paths.source);
    config.resolve?.modules?.push(path.resolve(paths.modules));

    config.module?.rules?.push({
      test: /\.s[ac]ss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    });

    return config;
  },

  framework: {
    name: '@storybook/react-webpack5',

    options: {
      builder: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
