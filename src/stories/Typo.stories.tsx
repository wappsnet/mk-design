import { Meta } from '@storybook/react';

import MKTypo from 'components/MKTypo';

export const Title: Meta<typeof MKTypo.Title> = {
  render: (args) => <MKTypo.Title {...args} />,
  args: {
    children: 'Title',
  },
};

export const Paragraph: Meta<typeof MKTypo.Paragraph> = {
  render: (args) => <MKTypo.Paragraph {...args} />,
  args: {
    children: 'Paragraph',
  },
};

export const Caption: Meta<typeof MKTypo.Caption> = {
  render: (args) => <MKTypo.Caption {...args} />,
  args: {
    children: 'Caption',
  },
};

const TypoStories = {
  title: 'Typography',
  component: MKTypo,
  subcomponents: {
    Title: MKTypo.Title,
    Paragraph: MKTypo.Paragraph,
    Caption: MKTypo.Caption,
  },
};

export default TypoStories;
