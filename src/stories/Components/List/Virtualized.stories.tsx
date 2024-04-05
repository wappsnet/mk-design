import { Meta } from '@storybook/react';

import MKVirtualized from 'components/MKVirtualized';

export const MKVirtualizedStory: Meta<typeof MKVirtualized<number>> = {
  render: ({ ...args }) => (
    <MKVirtualized {...args}>
      {(data) => (
        <div>
          {data.visible.map((item) => (
            <span key={item}>{item}</span>
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
  title: 'Components/List/Virtualized',
  component: MKVirtualized,
  meta: MKVirtualizedStory,
};
