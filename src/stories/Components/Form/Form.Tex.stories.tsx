import { Meta } from '@storybook/react';

import { MKForm } from 'components/MKForm';

export const MKFormTextStory: Meta<typeof MKForm.Text> = {
  render: (args) => <MKForm.Text {...args} />,
  args: {
    children: 'text',
  },
};

export default {
  title: 'Components/Form/Text',
  component: MKForm.Text,
  meta: MKFormTextStory,
};
