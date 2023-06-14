import { Meta } from '@storybook/react';

import MKProgress from 'modules/MKProgress';

export const ProgressBar: Meta<typeof MKProgress.Bar> = {
  render: (args) => <MKProgress.Bar {...args} />,
};

ProgressBar.args = {
  percent: 0,
  size: 'md',
};

export const ProgressCircle: Meta<typeof MKProgress.Circle> = {
  render: (args) => <MKProgress.Circle {...args} />,
};

ProgressCircle.args = {
  percent: 0,
  size: 200,
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
