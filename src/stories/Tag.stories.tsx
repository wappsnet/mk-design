import { Meta } from '@storybook/react';

import MKTag from 'components/MKTag';

export const Tag: Meta<typeof MKTag> = {
  render: (args) => <MKTag {...args} />,
  args: {
    children: 'Tag',
  },
};

const TagStories = {
  title: 'Tag',
  component: MKTag,
};

export default TagStories;
