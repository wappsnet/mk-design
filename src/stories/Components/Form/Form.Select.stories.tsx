import { Meta } from '@storybook/react';

import { MKForm } from 'components/MKForm';

export const MKFormSelectStory: Meta<typeof MKForm.Select> = {
  render: (args) => (
    <MKForm.Select {...args}>
      {['first', 'second', 'third'].map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </MKForm.Select>
  ),
  args: {
    value: '',
  },
};

export default {
  title: 'Components/Form/Select',
  component: MKForm.Select,
  meta: MKFormSelectStory,
};
