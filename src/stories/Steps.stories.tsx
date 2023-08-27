import { Meta } from '@storybook/react';

import MKSteps from 'components/MKSteps';
import MKIcon from 'core/MKIcon';

export const Steps: Meta<typeof MKSteps> = {
  render: (args) => <MKSteps header={<MKSteps.Nav />} {...args} />,
  args: {
    items: [
      {
        name: 'step1',
        label: 'Step 1',
        description: 'Step 1 description',
        icon: <MKIcon name="address-book" />,
        content: 'Step 1 Content',
      },
      {
        name: 'step2',
        label: 'Step 2',
        description: 'Step 2 description',
        icon: <MKIcon name="address-card" />,
        content: 'Step 2 Content',
      },
      {
        name: 'step3',
        label: 'Step 3',
        description: 'Step 3 description',
        icon: <MKIcon name="circle-down" />,
        content: 'Step 3 Content',
      },
    ],
  },
};

const StepsStories = {
  title: 'Steps',
  component: MKSteps,
  subcomponents: {
    Nav: MKSteps.Nav,
    Item: MKSteps.Item,
  },
};

export default StepsStories;
