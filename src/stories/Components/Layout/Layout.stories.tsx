import { Meta } from '@storybook/react';

import { MKIcon } from 'core/MKIcon';

import { MKLayout } from 'components/MKLayout';
import { MKMenu } from 'components/MKMenu';

const MKLayoutStorySidebar = () => (
  <MKMenu design="primary">
    <MKMenu.Group label="group 1" icon={<MKIcon name="address-book" />}>
      <MKMenu.List orientation="vertical">
        <MKMenu.Item>
          <MKMenu.Link>{'link 1'}</MKMenu.Link>
        </MKMenu.Item>
        <MKMenu.Item>
          <MKMenu.Link>{'link 2'}</MKMenu.Link>
        </MKMenu.Item>
      </MKMenu.List>
    </MKMenu.Group>
    <MKMenu.Collapse icon={<MKIcon name="user-gear" />} label="Collapse 1">
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
    design: 'primary',
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
