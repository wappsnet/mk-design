import { Meta } from '@storybook/react';

import MKButton from 'modules/MKButton';

export const Button: Meta<typeof MKButton> = {
  render: (args) => <MKButton {...args} />,
  args: {
    children: 'Button',
  },
};

const ButtonStories = {
  title: 'Button',
};

export default ButtonStories;
