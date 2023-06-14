import { Meta } from '@storybook/react';

import MKTag from 'modules/MKTag';

export const Tag: Meta<typeof MKTag> = {
  render: (args) => <MKTag {...args} />,
};

Tag.args = {
  children: 'Tag',
};

const TagStories = {
  title: 'Tag',
};

export default TagStories;
