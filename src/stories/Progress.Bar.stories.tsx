import { Meta } from '@storybook/react';

import { MKProgress } from 'components/MKProgress';

export const MKProgressBarStory: Meta<typeof MKProgress.Bar> = {
  render: (args) => <MKProgress.Bar {...args} />,
  args: {
    percent: 0,
    size: 'md',
  },
};

export default {
  title: 'Progress/Bar',
  component: MKProgress.Bar,
  meta: MKProgressBarStory,
};
