import { Meta } from '@storybook/react';

import { MKIcon } from 'core/MKIcon';

import { MKLayout } from 'components/MKLayout';
import { MKMenu } from 'components/MKMenu';

const MKLayoutStorySidebar = () => (
  <MKMenu theme="primary">
    <MKMenu.Group label="group 1" icon={<MKIcon icon="address-book" />}>
      <MKMenu.List orientation="vertical">
        <MKMenu.Item>
          <MKMenu.Link>{'link 1'}</MKMenu.Link>
        </MKMenu.Item>
        <MKMenu.Item>
          <MKMenu.Link>{'link 2'}</MKMenu.Link>
        </MKMenu.Item>
      </MKMenu.List>
    </MKMenu.Group>
    <MKMenu.Collapse icon={<MKIcon icon="user-gear" />} label="Collapse 1">
      <MKMenu.List orientation="vertical">
        <MKMenu.Item>
          <MKMenu.Link>{'link 1'}</MKMenu.Link>
        </MKMenu.Item>
        <MKMenu.Item>
          <MKMenu.Link>{'link 2'}</MKMenu.Link>
        </MKMenu.Item>
      </MKMenu.List>
    </MKMenu.Collapse>
  </MKMenu>
);

export const MKLayoutStory: Meta<typeof MKLayout> = {
  render: (args) => <MKLayout {...args} />,
  args: {
    variant: 'sticky-sidebar',
    theme: 'primary',
    children: 'Content',
    brand: 'Brand',
    sidebar: <MKLayoutStorySidebar />,
    header: 'Header',
    footer: 'Footer',
  },
};

export default {
  title: 'Components/Layout',
  component: MKLayout,
  meta: MKLayoutStory,
};
