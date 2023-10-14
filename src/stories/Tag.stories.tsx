import { Meta } from '@storybook/react';

import { MKTag } from 'components/MKTag';

export const MKTagStory: Meta<typeof MKTag> = {
  render: (args) => <MKTag {...args} />,
  args: {
    children: 'Tag',
  },
};

export default {
  title: 'Core/Tag',
  component: MKTag,
  meta: MKTagStory,
};
