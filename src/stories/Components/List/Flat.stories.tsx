import { Meta } from '@storybook/react';

import { MKPill } from 'core/MKPill';

import { MKCard } from 'components/MKCard';
import { MKFlatList } from 'components/MKFlatList';
import { MKGrid } from 'components/MKGrid';

export const MKFlatListStory: Meta<typeof MKFlatList> = {
  render: ({ ...args }) => (
    <MKFlatList
      {...args}
      data={Array.from(Array(12).keys())}
      renderBody={(body) => <MKGrid.Row>{body}</MKGrid.Row>}
      renderRow={({ data: value, loading }) => (
        <MKGrid.Col key={value} lg={4} md={3} sm={12}>
          <MKCard>
            <MKCard.Body>
              {loading ? <MKPill width="100%" height="5x" shape="round" random /> : <>{value}</>}
            </MKCard.Body>
          </MKCard>
        </MKGrid.Col>
      )}
    />
  ),
};

export default {
  title: 'Components/List/Flat',
  component: MKFlatList,
  meta: MKFlatListStory,
};
