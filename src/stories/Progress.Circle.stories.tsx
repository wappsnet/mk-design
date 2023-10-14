import { Meta } from '@storybook/react';

import { MKProgress } from 'components/MKProgress';

export const MKProgressCircleStory: Meta<typeof MKProgress.Circle> = {
  render: (args) => <MKProgress.Circle {...args} />,
  args: {
    percent: 0,
  },
};

export default {
  title: 'Progress/Circle',
  component: MKProgress.Circle,
  meta: MKProgressCircleStory,
};
