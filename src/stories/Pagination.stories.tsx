import { useState } from 'react';
import { Meta } from '@storybook/react';

import MKPagination from 'components/MKPagination';

export const Pagination: Meta<typeof MKPagination> = {
  render: (args) => {
    const [current, setCurrent] = useState(args.current);
    return <MKPagination {...args} current={current} onChange={(page) => setCurrent(page)} />;
  },
};

const PaginationStories = {
  title: 'Pagination',
  component: MKPagination,
  subcomponents: {
    Item: MKPagination.Item,
    Ellipsis: MKPagination.Ellipsis,
    Next: MKPagination.Next,
    Prev: MKPagination.Prev,
    First: MKPagination.First,
    Last: MKPagination.Last,
  },
};

export default PaginationStories;
