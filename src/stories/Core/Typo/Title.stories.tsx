import { StoryObj } from '@storybook/react';

import { MKTypo } from 'core/MKTypo';

export const MKTitleStory: StoryObj<typeof MKTypo.Title> = {
  render: (args) => <MKTypo.Title {...args} />,
  args: {
    children: 'Title',
  },
};

export default {
  title: 'Core/Typo/Title',
  component: MKTypo.Title,
  meta: MKTitleStory,
};
