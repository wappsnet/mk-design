import { Meta } from '@storybook/react';

import { MKPagination } from 'components/MKPagination';

export const MKPaginationStory: Meta<typeof MKPagination> = {
  render: (args) => <MKPagination {...args} />,
};

export default {
  title: 'Components/Pagination',
  component: MKPagination,
  meta: MKPaginationStory,
};
