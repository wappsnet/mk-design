import { Meta } from '@storybook/react';

import MKCollapse from 'modules/MKCollapse';

export const Collapse: Meta<typeof MKCollapse> = {
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

const CollapseStories = {
  title: 'Collapse',
};

export default CollapseStories;
