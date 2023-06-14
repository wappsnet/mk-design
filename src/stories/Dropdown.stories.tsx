import { Meta } from '@storybook/react';

import MKDropdown from 'modules/MKDropdown';

export const Dropdown: Meta<typeof MKDropdown> = {
  render: (args) => (
    <MKDropdown {...args}>
      <MKDropdown.Toggle title="Toggle" />
      <MKDropdown.Content>
        <MKDropdown.Group>
          <MKDropdown.Collapse>
            <MKDropdown.Group>
              <MKDropdown.Item>{'item 1'}</MKDropdown.Item>
              <MKDropdown.Item>{'item 2'}</MKDropdown.Item>
            </MKDropdown.Group>
          </MKDropdown.Collapse>
        </MKDropdown.Group>
      </MKDropdown.Content>
    </MKDropdown>
  ),
};

const DropdownStories = {
  title: 'Dropdown',
};

export default DropdownStories;
