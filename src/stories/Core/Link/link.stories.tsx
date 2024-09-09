import { StoryObj } from '@storybook/react';

import { MKLink } from 'core/MKLink';

export const MKLinkStory: StoryObj<typeof MKLink> = {
  render: (args) => <MKLink {...args} />,
  args: {
    href: 'https://kaitzak.com',
    children: 'MK Link',
  },
};

export default {
  title: 'Core/Link',
  component: MKLink,
  meta: MKLinkStory,
};
