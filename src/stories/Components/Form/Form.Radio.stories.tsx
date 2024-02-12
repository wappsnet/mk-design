import { Meta } from '@storybook/react';

import { MKForm } from 'components/MKForm';

export const MKFormRadioStory: Meta<typeof MKForm.Radio> = {
  render: (args) => <MKForm.Radio {...args} />,
  args: {
    label: 'Radio',
    name: 'radio',
    id: 'radio',
    valid: false,
    invalid: false,
    disabled: false,
  },
};

export default {
  title: 'Components/Form/Radio',
  component: MKForm.Radio,
  meta: MKFormRadioStory,
};
