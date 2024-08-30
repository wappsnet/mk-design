import { StoryObj } from '@storybook/react';

import { MKIcon } from 'core/MKIcon';

export const MKIconStory: StoryObj<typeof MKIcon> = {
  render: (args) => <MKIcon {...args} />,
  args: {
    icon: {
      prefix: 'solid',
      name: 'lock-open',
    },
  },
};

export default {
  title: 'Core/Icon',
  component: MKIcon,
  meta: MKIconStory,
};
