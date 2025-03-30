import { Meta } from '@storybook/react';

import { MKTree } from 'components/MKTree';

export const MKTreeStory: Meta<typeof MKTree> = {
  render: (args) => <MKTree {...args} showToggleIcon />,
  args: {
    tree: [
      {
        path: '1',
        label: 'Label 1',
        data: {
          label: 'Data 1.1',
        },
        children: [
          {
            path: '1/child/1',
            label: 'Label 1.1',
            data: {
              label: 'Data 1.1',
            },
          },
          {
            path: '1/child/2',
            label: 'Label 1.2',
            data: {
              label: 'Data 1.1',
            },
            children: [
              {
                path: '1/child/1/child/1',
                label: 'Label 1.2.1',
                data: {
                  label: 'Data 1.1',
                },
              },
              {
                path: '1/child/2/child/2',
                label: 'Label 1.2.1',
                data: {
                  label: 'Data 1.1',
                },
              },
            ],
          },
        ],
      },
      {
        path: '2',
        label: 'Label 2',
        data: {
          label: 'Data 1.1',
        },
        children: [
          {
            path: '2/child/1',
            label: 'Label 2.1',
            data: {
              label: 'Data 1.1',
            },
          },
          {
            path: '2/child/2',
            label: 'Label 2.1',
            data: {
              label: 'Data 1.1',
            },
          },
        ],
      },
    ],
  },
};

export default {
  title: 'Components/Tree',
  component: MKTree,
  meta: MKTreeStory,
};
