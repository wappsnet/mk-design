import { MKTheme } from 'theme';

import { Preview } from '@storybook/react';

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <MKTheme>
        <Story />
      </MKTheme>
    ),
  ],
};

export default preview;
