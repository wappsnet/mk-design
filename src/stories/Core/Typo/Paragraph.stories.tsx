import { StoryObj } from '@storybook/react';

import { MKTypo } from 'core/MKTypo';

export const MKParagraphStory: StoryObj<typeof MKTypo.Paragraph> = {
  render: (args) => <MKTypo.Paragraph {...args} />,
  args: {
    children: 'Paragraph',
  },
};

export default {
  title: 'Core/Typo/Paragraph',
  component: MKTypo.Paragraph,
  meta: MKParagraphStory,
};
