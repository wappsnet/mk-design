import { Meta } from '@storybook/react';

import { MKActionBar } from 'components/MKActionBar';
import { MKButton } from 'components/MKButton';

export const MKActionBarStory: Meta<typeof MKActionBar> = {
  render: (args) => (
    <MKActionBar {...args}>
      <MKActionBar.Section justify="start">
        <MKButton design="tertiary" blank>
          {'Cancel'}
        </MKButton>
      </MKActionBar.Section>
      <MKActionBar.Section justify="end">
        <MKButton design="primary">{'Confirm'}</MKButton>
      </MKActionBar.Section>
    </MKActionBar>
  ),
};

export default {
  title: 'Components/ActionBar',
  component: MKActionBar,
  meta: MKActionBarStory,
};
