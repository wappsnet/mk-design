import { StoryObj } from '@storybook/react';

import { MKImage } from 'core/MKImage';

export const MKImageStory: StoryObj<typeof MKImage> = {
  render: (args) => <MKImage {...args} />,
  args: {
    src: 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg',
    width: '100%',
  },
};

export default {
  title: 'Core/Image',
  component: MKImage,
  meta: MKImageStory,
};
