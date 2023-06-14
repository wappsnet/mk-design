import { Meta } from '@storybook/react';

import MKTypo from 'modules/MKTypo';

export const Title: Meta<typeof MKTypo.Title> = {
  render: (args) => <MKTypo.Title {...args} />,
};

Title.args = {
  children: 'Title',
};

export const Paragraph: Meta<typeof MKTypo.Paragraph> = {
  render: (args) => <MKTypo.Paragraph {...args} />,
};

Paragraph.args = {
  children: 'Paragraph',
};

export const Caption: Meta<typeof MKTypo.Caption> = {
  render: (args) => <MKTypo.Caption {...args} />,
};

Caption.args = {
  children: 'Caption',
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
