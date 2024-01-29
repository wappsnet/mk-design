import { Meta } from '@storybook/react';

import { MKForm } from 'components/MKForm';
export const MKFormRangeStory: Meta<typeof MKForm.Range> = {
  render: (args) => <MKForm.Range {...args} />,
  args: {
    name: 'range',
    id: 'range',
    isValid: false,
    isInvalid: false,
    disabled: false,
    value: 0,
    min: 0,
    max: 100,
    step: 1,
  },
};

export default {
  title: 'Components/Form/Range',
  component: MKForm.Range,
  meta: MKFormRangeStory,
};
