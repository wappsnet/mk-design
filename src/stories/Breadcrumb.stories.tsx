import { Meta } from '@storybook/react';

import MKBreadcrumb from 'modules/MKBreadcrumb';

export const Breadcrumb: Meta<typeof MKBreadcrumb> = {
  render: (args) => (
    <MKBreadcrumb
      {...args}
      render={(item, index) => (
        <MKBreadcrumb.Item key={index} link={item.link} active={item.active} icon={item.icon}>
          {item.label}
        </MKBreadcrumb.Item>
      )}
    />
  ),
};

Breadcrumb.args = {
  data: [
    {
      icon: '>',
      link: 'a',
      label: 'home',
      active: false,
    },
    {
      link: 'b',
      label: 'dashboard',
      active: false,
    },
    {
      link: 'c',
      label: 'current',
      active: true,
    },
  ],
};

const BreadcrumbStories = {
  title: 'Breadcrumb',
};

export default BreadcrumbStories;
