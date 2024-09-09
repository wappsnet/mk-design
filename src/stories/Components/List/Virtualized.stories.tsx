import { Meta } from '@storybook/react';

import { MKGrid } from 'components/MKGrid';
import MKVirtualized from 'components/MKVirtualized';

export const MKVirtualizedStory: Meta<typeof MKVirtualized<number>> = {
  render: ({ ...args }) => (
    <MKVirtualized {...args} items={Array.from(Array(10000).keys())}>
      {(data, { scroll }) => (
        <MKGrid.Box
          direction="column"
          style={{
            maxHeight: 300,
            overflowY: 'auto',
          }}
          onScroll={(e) => {
            scroll(e.currentTarget.scrollTop);
          }}
        >
          {data.visible.map((item) => (
            <div
              key={item}
              style={{
                width: '100%',
                backgroundColor: 'red',
              }}
            >
              {item}
            </div>
          ))}
        </MKGrid.Box>
      )}
    </MKVirtualized>
  ),
};

export default {
  title: 'Components/List/Virtualized',
  component: MKVirtualized,
  meta: MKVirtualizedStory,
};
