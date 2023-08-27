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
  features: {
    buildStoriesJson: true,
    argTypeTargetsV7: true,
    storyStoreV7: true,
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  framework: '@storybook/react-webpack5',
  webpackFinal: (config) => {
    const resolve = config.resolve || {};
    const module = config.module || {};
    const rules = module.rules || [];
    const modules = resolve.modules || [];

    return {
      ...config,
      module: {
        ...module,
        rules: rules.concat([
          {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
        ]),
      },
      resolve: {
        ...resolve,
        modules: modules.concat([paths.root, 'node_modules']),
        alias: {
          stories: path.resolve(paths.root, 'stories'),
          core: path.resolve(paths.root, 'core'),
          definitions: path.resolve(paths.root, 'definitions'),
          components: path.resolve(paths.root, 'components'),
          helpers: path.resolve(paths.root, 'helpers'),
          hooks: path.resolve(paths.root, 'hooks'),
          theme: path.resolve(paths.root, 'theme'),
          types: path.resolve(paths.root, 'types'),
        },
      },
    };
  },
};

export default config;
