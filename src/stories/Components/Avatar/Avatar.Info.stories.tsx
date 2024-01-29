import { Meta } from '@storybook/react';

import { MKAvatar } from 'components/MKAvatar';

export const MKAvatarInfoStory: Meta<typeof MKAvatar.Info> = {
  render: (args) => <MKAvatar.Info {...args} />,
  args: {
    children: 'MK',
  },
};

export default {
  title: 'Components/Avatar/Info',
  meta: MKAvatarInfoStory,
  component: MKAvatar.Info,
};
