import { Meta } from '@storybook/react';

import { MKGrid } from 'components/MKGrid';
import { MKTooltip } from 'components/MKTooltip';

export const MKTooltipStory: Meta<typeof MKTooltip> = {
  render: (args) => (
    <MKGrid.Box justify="center">
      <MKTooltip {...args}>
        <span>{'Toggle'}</span>
      </MKTooltip>
    </MKGrid.Box>
  ),
  args: {
    overlay: 'Overlay',
  },
};

export default {
  title: 'Components/Tooltip',
  component: MKTooltip,
  meta: MKTooltipStory,
};
