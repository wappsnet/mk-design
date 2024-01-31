import { Meta } from '@storybook/react';

import { MKForm } from 'components/MKForm';

export const MKFormInputStory: Meta<typeof MKForm.Input> = {
  render: (args) => <MKForm.Input {...args} />,
  args: {
    value: '',
    placeholder: 'text input',
  },
};

export default {
  title: 'Components/Form/Input',
  component: MKForm.Input,
  meta: MKFormInputStory,
};
