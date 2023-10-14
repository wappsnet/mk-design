import { Meta } from '@storybook/react';

import { MKCollapse } from 'components/MKCollapse';

export const MKCollapseStory: Meta<typeof MKCollapse> = {
  render: (args) => (
    <MKCollapse {...args}>
      <MKCollapse.Item name="1" header={'Collapse Header 1'}>
        {'Collapse Content 1'}
      </MKCollapse.Item>
      <MKCollapse.Item name="2" header={'Collapse Header 2'}>
        {'Collapse Content 2'}
      </MKCollapse.Item>
    </MKCollapse>
  ),
};

export default {
  title: 'Collapse/Collapse',
  component: MKCollapse,
  meta: MKCollapseStory,
};
