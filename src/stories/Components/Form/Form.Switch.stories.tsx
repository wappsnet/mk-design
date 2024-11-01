import { Meta } from '@storybook/react';

import { MKForm } from 'components/MKForm';

export const MKFormSwitchStory: Meta<typeof MKForm.Switch> = {
  render: (args) => <MKForm.Switch {...args} />,
  args: {
    label: 'Switch',
    name: 'switch',
    id: 'switch',
    valid: false,
    invalid: false,
    disabled: false,
  },
};

export default {
  title: 'Components/Form/Switch',
  component: MKForm.Switch,
  meta: MKFormSwitchStory,
};
