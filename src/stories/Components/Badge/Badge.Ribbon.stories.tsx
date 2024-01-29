import { Meta } from '@storybook/react';

import { MKBadge } from 'components/MKBadge';

export const MKBadgeRibbonStory: Meta<typeof MKBadge.Ribbon> = {
  render: (args) => <MKBadge.Ribbon {...args} />,
  args: {
    children: 'MK',
  },
};

export default {
  title: 'Components/Badge/Ribbon',
  component: MKBadge.Ribbon,
  meta: MKBadgeRibbonStory,
};
