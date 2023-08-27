import { Meta } from '@storybook/react';

import MKGrid from 'components/MKGrid';

export const Grid: Meta<typeof MKGrid> = {
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

const GridStories = {
  title: 'Grid',
  component: MKGrid,
  subcomponents: {
    Row: MKGrid.Row,
    Col: MKGrid.Col,
  },
};

export default GridStories;
