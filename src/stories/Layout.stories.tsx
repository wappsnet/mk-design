import { Meta } from '@storybook/react';

import { MKLayout } from 'components/MKLayout';

export const MKLayoutStory: Meta<typeof MKLayout> = {
  render: (args) => <MKLayout {...args} />,
  args: {
    variant: 'sticky-sidebar',
    design: 'primary',
    children: 'Content',
    brand: 'Brand',
    sidebar: 'Sidebar',
    header: 'Header',
    footer: 'Footer',
  },
};

export default {
  title: 'Layout/Wrapper',
  component: MKLayout,
  meta: MKLayoutStory,
};
