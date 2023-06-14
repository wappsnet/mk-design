import { Meta } from '@storybook/react';

import MKTooltip from 'modules/MKTooltip';

export const Tooltip: Meta<typeof MKTooltip> = {
  render: (args) => (
    <section
      style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignContent: 'center' }}
    >
      <MKTooltip {...args}>
        <span>{'Toggle'}</span>
      </MKTooltip>
    </section>
  ),
};

const TooltipStories = {
  title: 'Tooltip',
};

export default TooltipStories;
