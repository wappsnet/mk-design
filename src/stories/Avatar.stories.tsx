import { StoryObj } from '@storybook/react';

import MKAvatar from 'components/MKAvatar';

export const Image: StoryObj<typeof MKAvatar.Image> = {
  render: (args) => <MKAvatar.Image {...args} />,
  args: {
    title: 'Hayk KarapetYan',
    borderless: true,
    imageUrl: '',
  },
};

export const Info: StoryObj<typeof MKAvatar.Info> = {
  render: (args) => <MKAvatar.Info {...args} />,
  args: {
    children: 'PA',
    borderless: true,
  },
};

const AvatarStories = {
  title: 'Avatar',
  component: MKAvatar,
  subcomponents: {
    Image: MKAvatar.Image,
    Info: MKAvatar.Info,
  },
};

export default AvatarStories;
