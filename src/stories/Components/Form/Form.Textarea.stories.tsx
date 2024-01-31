import { Meta } from '@storybook/react';

import { MKForm } from 'components/MKForm';

export const MKFormTextareaStory: Meta<typeof MKForm.Textarea> = {
  render: (args) => <MKForm.Textarea {...args} />,
  args: {
    value: '',
    placeholder: 'Text',
  },
};

export default {
  title: 'Components/Form/Textarea',
  component: MKForm.Textarea,
  meta: MKFormTextareaStory,
};
