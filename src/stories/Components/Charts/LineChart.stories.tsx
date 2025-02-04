import { Meta } from '@storybook/react';

import { MKCharts } from 'components/MKCharts';

const MK_LINE_CHART_DATA = [
  {
    name: 'Page A',
    value: 10,
    otherValue: 20,
  },
  {
    name: 'Page B',
    value: 1200,
    otherValue: 1100,
  },
  {
    name: 'Page C',
    value: 2400,
    otherValue: 2200,
  },
  {
    name: 'Page D',
    value: 3600,
    otherValue: 3200,
  },
  {
    name: 'Page E',
    value: 4700,
    otherValue: 4200,
  },
  {
    name: 'Page F',
    value: 5800,
    otherValue: 2700,
  },
  {
    name: 'Page G',
    value: 6000,
    otherValue: 3100,
  },
];

export const MKLineChartStory: Meta<typeof MKCharts.Line> = {
  render: (args) => <MKCharts.Line {...args} />,
  args: {
    data: MK_LINE_CHART_DATA,
    lines: {
      value: 'value',
      otherValue: 'otherValue',
    },
  },
};

export default {
  title: 'Components/Charts/Line',
  component: MKCharts.Line,
  meta: MKLineChartStory,
};
