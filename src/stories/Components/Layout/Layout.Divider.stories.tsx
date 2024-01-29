import { Meta } from '@storybook/react';

import { MKLayout } from 'components/MKLayout';

export const MKLayoutDividerStory: Meta<typeof MKLayout.Divider> = {
  render: (args) => <MKLayout.Divider {...args} />,
  args: {
    label: 'OR',
  },
};

export default {
  title: 'Components/Layout/Divider',
  component: MKLayout.Divider,
  meta: MKLayoutDividerStory,
};
