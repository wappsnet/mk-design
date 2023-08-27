import { Meta } from '@storybook/react';

import MKTable from 'components/MKTable';

export const Table: Meta<typeof MKTable> = {
  render: (args) => <MKTable {...args} />,
  args: {
    columns: [
      {
        name: 'id',
        label: 'ID',
        render: (data) => data,
        onSort: () => console.log,
        onSelect: () => console.log,
      },
      {
        name: 'name',
        label: 'Name',
        render: (data) => data,
      },
      {
        name: 'date',
        label: 'Date',
        render: (data) => data,
      },
    ],
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
  },
};

const TableStories = {
  title: 'Table',
  component: MKTable,
};

export default TableStories;
