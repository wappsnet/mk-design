import { StoryObj } from '@storybook/react';

import { MKSpin } from 'core/MKSpin';

export const MKSpinStory: StoryObj<typeof MKSpin> = {
  render: (args) => <MKSpin {...args} />,
};

export default {
  title: 'Core/Spin',
  component: MKSpin,
  meta: MKSpinStory,
};
