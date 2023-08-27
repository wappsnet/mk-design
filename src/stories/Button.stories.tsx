import { Meta } from '@storybook/react';

import MKButton from 'components/MKButton';

export const Button: Meta<typeof MKButton> = {
  render: (args) => <MKButton {...args} />,
  args: {
    children: 'MK Button',
  },
};

const ButtonStories = {
  title: 'Button',
  component: MKButton,
};

export default ButtonStories;
