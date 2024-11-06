import { StoryObj } from '@storybook/react';

import { MKIcon } from 'core/MKIcon';
import { MKTypo } from 'core/MKTypo';

export const MKFormatterStory: StoryObj<typeof MKTypo.Formatter> = {
  render: (args) => (
    <MKTypo.Title>
      <MKTypo.Formatter {...args} />
    </MKTypo.Title>
  ),
  args: {
    children: 'Title',
    prefix: <MKIcon icon="users" />,
    suffix: <MKIcon icon="gamepad" />,
  },
};

export default {
  title: 'Core/Typo/Formatter',
  component: MKTypo.Formatter,
  meta: MKFormatterStory,
};
