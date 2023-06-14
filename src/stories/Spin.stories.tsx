import { Meta } from '@storybook/react';

import MKSpin from 'core/MKSpin';

export const Spin: Meta<typeof MKSpin> = {
  render: (args) => <MKSpin {...args} />,
};

const SpinStories = {
  title: 'Spin',
  component: MKSpin,
};

export default SpinStories;
