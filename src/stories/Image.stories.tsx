import { Meta } from '@storybook/react';

import MKImage from 'core/MKImage';

export const Image: Meta<typeof MKImage> = {
  render: (args) => <MKImage {...args} />,
};

const ImageStories = {
  title: 'Image',
  component: MKImage,
};

export default ImageStories;
