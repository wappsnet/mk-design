import { Meta } from '@storybook/react';

import MKSlider from 'modules/MKSlider';

export const Slider: Meta<typeof MKSlider> = {
  render: (args) => <MKSlider {...args} renderItem={(item, index) => <div key={index}>{item.node}</div>} />,
};

Slider.args = {
  data: [
    {
      node: <p>{'Slide 1'}</p>,
    },
    {
      node: <p>{'Slide 2'}</p>,
    },
    {
      node: <p>{'Slide 3'}</p>,
    },
    {
      node: <p>{'Slide 4'}</p>,
    },
    {
      node: <p>{'Slide 5'}</p>,
    },
    {
      node: <p>{'Slide 6'}</p>,
    },
    {
      node: <p>{'Slide 7'}</p>,
    },
    {
      node: <p>{'Slide 8'}</p>,
    },
    {
      node: <p>{'Slide 9'}</p>,
    },
  ],
};

const SliderStories = {
  title: 'Slider',
  component: MKSlider,
};

export default SliderStories;
