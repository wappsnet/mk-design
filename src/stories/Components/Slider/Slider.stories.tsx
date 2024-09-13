import { Meta } from '@storybook/react';

import { MKSlider } from 'components/MKSlider';

export const MKSliderStory: Meta<typeof MKSlider> = {
  render: (args) => <MKSlider {...args} renderItem={(item, index) => <div key={index}>{item}</div>} />,
  args: {
    data: Array.from(Array(10).keys()).map((k) => (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'red',
          color: 'white',
        }}
        key={k}
      >{`Slide ${k}`}</div>
    )),
    gap: 5,
  },
};

export default {
  title: 'Components/Slider',
  component: MKSlider,
  meta: MKSliderStory,
};
