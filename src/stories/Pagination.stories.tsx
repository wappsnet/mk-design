import { useState } from 'react';
import { Meta } from '@storybook/react';

import MKPagination from 'modules/MKPagination';

export const Pagination: Meta<typeof MKPagination> = {
  render: (args) => {
    const [current, setCurrent] = useState(args.current);
    return <MKPagination {...args} current={current} onChange={(page) => setCurrent(page)} />;
  },
};

const PaginationStories = {
  title: 'Pagination',
  component: MKPagination,
};

export default PaginationStories;
