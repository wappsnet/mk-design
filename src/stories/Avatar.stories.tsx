import { Meta } from '@storybook/react';

import MKAvatar from 'modules/MKAvatar';

export const Image: Meta<typeof MKAvatar.Image> = {
  render: (args) => <MKAvatar.Image {...args} />,
};

Image.args = {
  title: 'Hayk KarapetYan',
};

export const Info: Meta<typeof MKAvatar.Info> = {
  render: (args) => <MKAvatar.Info {...args} />,
};

Info.args = {
  children: 'PA',
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
