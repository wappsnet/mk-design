import { Meta } from '@storybook/react';

import { MKForm } from 'components/MKForm';

export const MKFormDateStory: Meta<typeof MKForm.Date> = {
  render: (args) => <MKForm.Date {...args} />,
  args: {
    name: 'date',
    id: 'date',
    type: 'date',
    isValid: false,
    isInvalid: false,
    disabled: false,
  },
};

export default {
  title: 'Components/Form/Date',
  component: MKForm.Date,
  meta: MKFormDateStory,
};
