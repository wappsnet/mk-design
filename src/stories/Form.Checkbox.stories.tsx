import { Meta } from '@storybook/react';

import { MKForm } from 'components/MKForm';

export const MKFormCheckboxStory: Meta<typeof MKForm.Checkbox> = {
  render: (args) => <MKForm.Checkbox {...args} />,
  args: {
    label: 'Checkbox',
    name: 'checkbox',
    id: 'checkbox',
    isValid: false,
    isInvalid: false,
    disabled: false,
  },
};

export default {
  title: 'Form/Checkbox',
  component: MKForm.Checkbox,
  meta: MKFormCheckboxStory,
};
