import { Meta } from '@storybook/react';

import MKVirtualized from 'components/MKVirtualized';

export const MKVirtualizedStory: Meta<typeof MKVirtualized> = {
  render: ({ ...args }) => (
    <MKVirtualized {...args}>
      {(data) => (
        <div>
          {data.visible.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      )}
    </MKVirtualized>
  ),
  args: {
    items: Array.from(Array(10000).keys()),
  },
};

export default {
  title: 'Core/Virtualized',
  component: MKVirtualized,
  meta: MKVirtualizedStory,
};
