import { Meta } from '@storybook/react';

import { MKLayout } from 'components/MKLayout';

export const MKLayoutCardStory: Meta<typeof MKLayout.Card> = {
  render: (args) => <MKLayout.Card {...args} />,
  args: {
    theme: 'primary',
    children: 'Content',
    brand: 'Brand',
    header: 'Header',
    footer: 'Footer',
  },
};

export default {
  title: 'Components/Layout/Card',
  component: MKLayout.Card,
  meta: MKLayoutCardStory,
};
