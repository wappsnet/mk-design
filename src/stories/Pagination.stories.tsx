import { useState } from 'react';
import { Meta } from '@storybook/react';

import { MKPagination } from 'components/MKPagination';

export const MKPaginationStory: Meta<typeof MKPagination> = {
  render: (args) => {
    const [current, setCurrent] = useState(args.current);
    return <MKPagination {...args} current={current} onChange={(page) => setCurrent(page)} />;
  },
};

export default {
  title: 'Core/Pagination',
  component: MKPagination,
  meta: MKPaginationStory,
};
