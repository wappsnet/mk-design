import { Meta } from '@storybook/react';

import { MKButton } from 'components/MKButton';

export const MKButtonStory: Meta<typeof MKButton> = {
  render: (args) => <MKButton {...args} />,
  args: {
    children: 'MK Button',
  },
};

export default {
  title: 'Core/Button',
  component: MKButton,
  meta: MKButtonStory,
};
