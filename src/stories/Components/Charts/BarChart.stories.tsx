import { Meta } from '@storybook/react';

import { MKCharts } from 'components/MKCharts';

export const MKBarChartStory: Meta<typeof MKCharts.Bars> = {
  render: (args) => <MKCharts.Bars {...args} />,
  args: {
    values: [
      {
        percent: 10,
        count: 1000,
      },
      {
        percent: 25,
        count: 3000,
      },
      {
        percent: 100,
        count: 5000,
      },
    ],
  },
};

export default {
  title: 'Components/Charts/Bar',
  component: MKCharts.Bars,
  meta: MKBarChartStory,
};
