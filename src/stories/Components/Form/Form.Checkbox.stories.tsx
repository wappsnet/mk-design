import { Meta } from '@storybook/react';

import { MKForm } from 'components/MKForm';

export const MKFormCheckStory: Meta<typeof MKForm.Checkbox> = {
  render: (args) => <MKForm.Checkbox {...args} />,
  args: {
    label: 'Checkbox',
    name: 'checkbox',
    id: 'checkbox',
    valid: false,
    invalid: false,
    disabled: false,
  },
};

export default {
  title: 'Components/Form/Checkbox',
  component: MKForm.Checkbox,
  meta: MKFormCheckStory,
};
