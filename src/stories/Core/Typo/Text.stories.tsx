import { StoryObj } from '@storybook/react';

import { MKTypo } from 'core/MKTypo';

export const MKTextStory: StoryObj<typeof MKTypo.Text> = {
  render: (args) => <MKTypo.Text {...args} />,
  args: {
    children: 'Text',
  },
};

export default {
  title: 'Core/Typo/Text',
  component: MKTypo.Text,
  meta: MKTextStory,
};
