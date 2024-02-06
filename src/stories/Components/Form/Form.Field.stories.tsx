import { Meta } from '@storybook/react';

import { MKIcon } from 'core/MKIcon';

import { MKForm } from 'components/MKForm';

export const MKFormFieldStory: Meta<typeof MKForm.Field> = {
  render: (args) => <MKForm.Field {...args} />,
  args: {
    children: <MKForm.Input name="field" />,
    prepend: <MKIcon icon="square-plus" />,
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
