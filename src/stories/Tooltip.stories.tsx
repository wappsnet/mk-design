import { Meta } from '@storybook/react';

import { MKTooltip } from 'components/MKTooltip';

export const MKTooltipStory: Meta<typeof MKTooltip> = {
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

export default {
  title: 'Core/Tooltip',
  component: MKTooltip,
  meta: MKTooltipStory,
};
