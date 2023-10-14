import { Meta } from '@storybook/react';

import { MKForm } from 'components/MKForm';

export const MKFormInputStory: Meta<typeof MKForm.Input> = {
  render: (args) => <MKForm.Input {...args} />,
  args: {
    value: '',
  },
};

export default {
  title: 'Form/Input',
  component: MKForm.Input,
  meta: MKFormInputStory,
};
