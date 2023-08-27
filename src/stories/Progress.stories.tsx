import { Meta } from '@storybook/react';

import MKProgress from 'components/MKProgress';

export const ProgressBar: Meta<typeof MKProgress.Bar> = {
  render: (args) => <MKProgress.Bar {...args} />,
  args: {
    percent: 0,
    size: 'md',
  },
};

export const ProgressCircle: Meta<typeof MKProgress.Circle> = {
  render: (args) => <MKProgress.Circle {...args} />,
  args: {
    percent: 0,
    size: 200,
  },
};

const ProgressStories = {
  title: 'Progress',
  component: MKProgress,
  subcomponents: {
    Bar: MKProgress.Bar,
    Circle: MKProgress.Circle,
  },
};

export default ProgressStories;
