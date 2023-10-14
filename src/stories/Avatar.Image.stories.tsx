import { Meta } from '@storybook/react';

import { MKAvatar } from 'components/MKAvatar';

export const MKAvatarImageStory: Meta<typeof MKAvatar.Image> = {
  render: (args) => <MKAvatar.Image {...args} />,
  args: {
    title: 'MK',
  },
};

export default {
  title: 'Avatar/Image',
  component: MKAvatar.Image,
  meta: MKAvatarImageStory,
};
