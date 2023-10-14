import { Meta } from '@storybook/react';

import { MKImage } from 'core/MKImage';

export const MKImageStory: Meta<typeof MKImage> = {
  render: (args) => <MKImage {...args} />,
};

export default {
  title: 'Core/Image',
  component: MKImage,
  meta: MKImageStory,
};
