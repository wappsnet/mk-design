import { Meta } from '@storybook/react';

import { MKLayout } from 'components/MKLayout';

export const MKLayoutStory: Meta<typeof MKLayout> = {
  render: (args) => (
    <MKLayout {...args}>
      <MKLayout.Sidebar>{'Sidebar'}</MKLayout.Sidebar>
      <MKLayout.Content>
        <MKLayout.Header>{'Header'}</MKLayout.Header>
        <MKLayout.Body>{'Body'}</MKLayout.Body>
        <MKLayout.Footer>{'Footer'}</MKLayout.Footer>
      </MKLayout.Content>
    </MKLayout>
  ),
  args: {
    design: 'primary',
  },
};

export default {
  title: 'Layout/Wrapper',
  component: MKLayout,
  meta: MKLayoutStory,
};
