import { Meta } from '@storybook/react';

import { MKIcon } from 'core/MKIcon';

import { MKForm } from 'components/MKForm';

export const MKFormFieldStory: Meta<typeof MKForm.Field> = {
  render: (args) => <MKForm.Field {...args} />,
  args: {
    children: <MKForm.Input name="field" id="field" />,
    prepend: <MKForm.Label htmlFor="field">{'Search'}</MKForm.Label>,
    append: <MKIcon icon="square-plus" />,
    overlay: {
      node: <MKIcon icon="square-plus" />,
      position: 'end',
    },
  },
};

export default {
  title: 'Components/Form/Field',
  component: MKForm.Field,
  meta: MKFormFieldStory,
};
