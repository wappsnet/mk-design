import { Meta } from '@storybook/react';

import { MKBreadcrumb } from 'components/MKBreadcrumb';

export const MKBreadcrumbStory: Meta<typeof MKBreadcrumb> = {
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

export default {
  title: 'Components/Breadcrumb',
  component: MKBreadcrumb,
  meta: MKBreadcrumbStory,
};
