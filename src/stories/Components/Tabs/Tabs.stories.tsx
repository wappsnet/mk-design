import { Meta } from '@storybook/react';

import { MKTabs } from 'components/MKTabs';

export const MKTabsStory: Meta<typeof MKTabs> = {
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
  args: {
    defaultActive: 'tab1',
  },
};

export default {
  title: 'Components/Tabs',
  component: MKTabs,
  meta: MKTabsStory,
};
