import { StoryObj } from '@storybook/react';

import { MKPill } from 'core/MKPill';
import { MKTypo } from 'core/MKTypo';

import { MKGrid } from 'components/MKGrid';

export const MKPillStory: StoryObj<typeof MKPill> = {
  render: (args) => (
    <MKGrid.Box>
      <MKGrid.Box>
        <MKPill {...args} />
      </MKGrid.Box>
      <MKTypo.Title>
        <MKPill {...args} />
      </MKTypo.Title>
      <MKTypo.Paragraph>
        <MKPill {...args} />
      </MKTypo.Paragraph>
    </MKGrid.Box>
  ),
  args: {
    shape: 'square',
    children: null,
    loading: true,
  },
};

export default {
  title: 'Core/Pill',
  component: MKPill,
  meta: MKPillStory,
};
