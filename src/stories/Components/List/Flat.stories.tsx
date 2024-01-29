import { Meta } from '@storybook/react';

import { MKPill } from 'core/MKPill';

import { MKCard } from 'components/MKCard';
import { MKFlatList } from 'components/MKFlatList';
import { MKGrid } from 'components/MKGrid';

export const MKFlatListStory: Meta<typeof MKFlatList> = {
  render: ({ ...args }) => <MKFlatList {...args} />,
  args: {
    renderBody: (body) => <MKGrid.Row>{body}</MKGrid.Row>,
    renderRow: ({ data, index, loading }) => (
      <MKGrid.Col lg={4} md={3} sm={12}>
        <MKCard key={index}>
          <MKCard.Body>{loading ? <MKPill width="100%" height="5x" shape="round" random /> : <>{data}</>}</MKCard.Body>
        </MKCard>
      </MKGrid.Col>
    ),
    data: Array.from(Array(12).keys()),
  },
};

export default {
  title: 'Components/List/Flat',
  component: MKFlatList,
  meta: MKFlatListStory,
};
