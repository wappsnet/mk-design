import { Meta } from '@storybook/react';

import { MKForm } from 'components/MKForm';

export const MKFormNumberStory: Meta<typeof MKForm.Number> = {
  render: (args) => <MKForm.Number {...args} />,
  args: {
    value: 1,
    placeholder: 'number input',
  },
};

export default {
  title: 'Components/Form/Number',
  component: MKForm.Number,
  meta: MKFormNumberStory,
};
