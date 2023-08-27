import { Meta } from '@storybook/react';

import MKBreadcrumb from 'components/MKBreadcrumb';

export const Breadcrumb: Meta<typeof MKBreadcrumb> = {
  render: (args) => <MKBreadcrumb {...args} />,
  args: {
    data: [
      {
        label: <a href="#">{'home'}</a>,
      },
      {
        label: <a href="#">{'dashboard'}</a>,
      },
      {
        label: 'current',
      },
    ],
  },
};

const BreadcrumbStories = {
  title: 'Breadcrumb',
  component: MKBreadcrumb,
  subcomponents: {
    Item: MKBreadcrumb.Item,
  },
};

export default BreadcrumbStories;
