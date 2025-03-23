import { Meta } from '@storybook/react';

import { MKBadge } from 'components/MKBadge';

export const MKBadgeUserStory: Meta<typeof MKBadge.User> = {
  render: (args) => <MKBadge.User {...args} />,
  args: {
    children: 'MK',
    name: 'Mark Kotlin',
    email: 'Mz9iD@example.com',
  },
};

export default {
  title: 'Components/Badge/User',
  component: MKBadge.User,
  meta: MKBadgeUserStory,
};
