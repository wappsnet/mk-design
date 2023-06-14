import { Meta } from '@storybook/react';

import MKTabs from 'modules/MKTabs';

export const Tabs: Meta<typeof MKTabs> = {
  render: (args) => (
    <MKTabs {...args}>
      <MKTabs.Item label={'tab 1'} name="tab1">
        {'Tab 1 Content'}
      </MKTabs.Item>
      <MKTabs.Item label={'tab 2'} name="tab2">
        {'Tab 2 Content'}
      </MKTabs.Item>
    </MKTabs>
  ),
};

Tabs.args = {
  defaultActive: 'tab1',
};

const TabsStories = {
  title: 'Tabs',
  component: MKTabs,
};

export default TabsStories;
