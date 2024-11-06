import { Meta } from '@storybook/react';

import { MKIcon } from 'core';

import { MKMenu } from 'components/MKMenu';

export const MKMenuStory: Meta<typeof MKMenu> = {
  render: (args) => (
    <MKMenu {...args}>
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
  ),
};

export default {
  title: 'Components/Menu',
  component: MKMenu,
  meta: MKMenuStory,
};
