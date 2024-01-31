import { Meta } from '@storybook/react';

import { MKLayout } from 'components/MKLayout';
import { MKTypo } from 'components/MKTypo';

export const MKTypoStory: Meta = {
  render: (args) => (
    <MKLayout>
      <MKLayout.Section type="header">
        <MKTypo.Title
          type="h1"
          center={args.center}
          underline={args.underline}
          truncate={args.truncate}
          bold={args.bold}
          italic={args.italic}
        >
          {args.title}
        </MKTypo.Title>
        <MKTypo.Title type="h2">{args.title}</MKTypo.Title>
        <MKTypo.Title type="h3">{args.title}</MKTypo.Title>
        <MKTypo.Title type="h4">{args.title}</MKTypo.Title>
        <MKTypo.Title type="h5">{args.title}</MKTypo.Title>
        <MKTypo.Title type="h6">{args.title}</MKTypo.Title>
      </MKLayout.Section>
      <MKLayout.Section type="content">
        <MKTypo.Paragraph
          center={args.center}
          underline={args.underline}
          truncate={args.truncate}
          bold={args.bold}
          italic={args.italic}
        >
          {args.paragraph}
        </MKTypo.Paragraph>

        {[...Array(10).keys()].map((size) => (
          <MKTypo.Text key={size} size={`${size}x`} center={args.center} underline={args.underline} bold={args.bold}>
            {args.text}
          </MKTypo.Text>
        ))}
      </MKLayout.Section>
    </MKLayout>
  ),
  args: {
    title: 'Title',
    paragraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet...',
    center: false,
    underline: false,
    truncate: false,
    bold: false,
    italic: false,
  },
  argTypes: {
    underline: {
      type: 'boolean',
    },
    center: {
      type: 'boolean',
    },
    truncate: {
      type: 'boolean',
    },
    bold: {
      type: 'boolean',
    },
    italic: {
      type: 'boolean',
    },
  },
};

export default {
  title: 'Theme/Typography',
  component: MKTypo,
  meta: MKTypoStory,
};