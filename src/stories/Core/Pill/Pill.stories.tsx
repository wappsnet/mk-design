import { Meta } from '@storybook/react';

import { MKPill } from 'core/MKPill';

export const MKPillStory: Meta<typeof MKPill> = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ width: '100%', height: 200 }}>
        <MKPill {...args} />
      </div>
      <div style={{ width: 100, height: 100, borderRadius: 100 }}>
        <MKPill {...args} />
      </div>
      <p style={{ width: 100, fontSize: 16, borderRadius: 10 }}>
        <MKPill {...args} />
      </p>
    </div>
  ),
};

export default {
  title: 'Core/Pill',
  component: MKPill,
  meta: MKPillStory,
};
