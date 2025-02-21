import { Meta } from '@storybook/react';

import { MKTable } from 'components/MKTable/MKTableWrapper';

interface MKTableStoryDataItemProps {
  id: number;
  name: string;
  date: string;
}

export const MKTableStory: Meta<typeof MKTable<MKTableStoryDataItemProps>> = {
  render: (args) => <MKTable {...args} />,
  args: {
    data: [
      {
        id: 1,
        name: 'Name1',
        date: '12/10/2022',
      },
      {
        id: 2,
        name: 'Name2',
        date: '13/10/2022',
      },
      {
        id: 3,
        name: 'Name3',
        date: '14/10/2022',
      },
    ],
    columns: [
      {
        name: 'id',
        label: 'ID',
        render: ({ data }) => data.id,
        onSort: () => console.log,
        onSelect: () => console.log,
      },
      {
        name: 'name',
        label: 'Name',
        render: ({ data }) => data.name,
      },
      {
        name: 'date',
        label: 'Date',
        media: [
          {
            size: 'lg',
            show: true,
          },
        ],
        render: ({ data }) => data.date,
      },
    ],
  },
};

export default {
  title: 'Components/List/Table',
  component: MKTable,
  meta: MKTableStory,
};
