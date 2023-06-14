import { Meta } from '@storybook/react';

import MKIcon from 'core/MKIcon';

export const Icon: Meta<typeof MKIcon> = {
  render: (args) => <MKIcon {...args} />,
};

Icon.args = {
  name: 'address-book',
};

const IconStories = {
  title: 'Icon',
  component: MKIcon,
};

export default IconStories;
