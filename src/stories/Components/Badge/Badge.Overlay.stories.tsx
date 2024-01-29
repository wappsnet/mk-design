import { Meta } from '@storybook/react';

import { MKBadge } from 'components/MKBadge';

export const MKBadgeOverlayStory: Meta<typeof MKBadge.Overlay> = {
  render: (args) => <MKBadge.Overlay {...args} />,
  args: {
    children: 'MK',
  },
};

export default {
  title: 'Components/Badge/Overlay',
  component: MKBadge.Overlay,
  meta: MKBadgeOverlayStory,
};
