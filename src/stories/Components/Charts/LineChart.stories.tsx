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

const generateYAxisTicks = () => {
  const value = Math.max(...MK_LINE_CHART_DATA.map(({ value }) => value));
  const ranges: Record<string, number> = {
    30: 10,
    60: 20,
    61.5: 50,
    75: 25,
    150: 50,
  };

  const sortedKeys = Object.keys(ranges).sort((firstElem, secondElem) => +firstElem - +secondElem);

  let currentValue = value;
  let exponentiation = 0;
  let range = 0;

  if (currentValue > 150) {
    while (currentValue > 150) {
      currentValue /= 10;
      ++exponentiation;
    }

    const foundElem = sortedKeys.find((elem) => +currentValue <= +elem);

    range = foundElem ? ranges[foundElem] * 10 ** exponentiation : 0;
  } else if (currentValue <= 15) {
    while (currentValue <= 15) {
      currentValue *= 10;
      ++exponentiation;
    }

    const foundElem = sortedKeys.find((elem) => +currentValue <= +elem);

    range = foundElem ? ranges[foundElem] * 10 ** -exponentiation : 0;
  } else {
    const foundElem = sortedKeys.find((elem) => +currentValue <= +elem);

    range = foundElem ? ranges[foundElem] : 0;
  }

  if (range) {
    const tickGaps = Math.ceil(value / range);

    return [...new Array(tickGaps + 1)].map((_, index) => index * range);
  }
};

const generateXAxisTicks = () => MK_LINE_CHART_DATA.map(({ otherValue }) => otherValue);

export const MKLineChartStory: Meta<typeof MKCharts.Line> = {
  render: (args) => <MKCharts.Line {...args} />,
  args: {
    xAxisTicks: generateXAxisTicks(),
    yAxisTicks: generateYAxisTicks(),
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
