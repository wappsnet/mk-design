import { Meta } from '@storybook/react';

import MKBreadcrumb from 'modules/MKBreadcrumb';

export const Breadcrumb: Meta<typeof MKBreadcrumb> = {
  render: (args) => <MKBreadcrumb {...args} />,
};

Breadcrumb.args = {
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
};

const BreadcrumbStories = {
  title: 'Breadcrumb',
};

export default BreadcrumbStories;
