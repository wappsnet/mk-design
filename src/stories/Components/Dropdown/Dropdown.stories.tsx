import { Meta } from '@storybook/react';

import { MKButton } from 'components/MKButton';
import { MKDropdown } from 'components/MKDropdown';

export const MKDropdownStory: Meta<typeof MKDropdown> = {
  render: (args) => (
    <MKDropdown {...args}>
      <MKDropdown.Toggle as={MKButton} design="primary">
        {'Toggle'}
      </MKDropdown.Toggle>
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

export default {
  title: 'Components/Dropdown',
  component: MKDropdown,
  meta: MKDropdownStory,
};
