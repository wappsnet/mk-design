import { Meta } from '@storybook/react';

import { MKSpin } from 'core/MKSpin';

export const MKSpinStory: Meta<typeof MKSpin> = {
  render: (args) => <MKSpin {...args} />,
};

export default {
  title: 'Core/Spin',
  component: MKSpin,
  meta: MKSpinStory,
};
