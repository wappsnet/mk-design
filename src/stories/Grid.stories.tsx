import { Meta } from '@storybook/react';

import { MKGrid } from 'components/MKGrid';

export const MKGridStory: Meta<typeof MKGrid.Wrapper> = {
  render: (args) => (
    <MKGrid {...args}>
      <MKGrid.Row>
        <MKGrid.Col xl="3" lg="4" md="6" xs="12">
          {'1'}
        </MKGrid.Col>
        <MKGrid.Col xl="3" lg="4" md="6" xs="12">
          {'1'}
        </MKGrid.Col>
        <MKGrid.Col xl="3" lg="4" md="6" xs="12">
          {'1'}
        </MKGrid.Col>
        <MKGrid.Col xl="3" lg="4" md="6" xs="12">
          {'1'}
        </MKGrid.Col>
      </MKGrid.Row>
    </MKGrid>
  ),
};

export default {
  title: 'Core/Grid',
  component: MKGrid.Wrapper,
  meta: MKGridStory,
};
