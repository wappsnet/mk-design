import { Meta } from '@storybook/react';

import { MKCharts } from 'components/MKCharts';

export const MKOrgChartStory: Meta<typeof MKCharts.Org> = {
  render: (args) => <MKCharts.Org {...args} />,
  args: {
    data: [
      {
        name: 'CEO',
        title: 'Chief Executive Officer',
        id: 1,
        children: [
          {
            name: 'CTO',
            title: 'Chief Technology Officer',
            id: 2,
            children: [
              {
                name: 'Dev Manager',
                title: 'Development Manager',
                id: 3,
                children: [
                  {
                    name: 'Senior Developer',
                    title: 'Senior Developer',
                    id: 4,
                  },
                  {
                    name: 'Junior Developer',
                    title: 'Junior Developer',
                    id: 5,
                    children: [
                      {
                        name: 'Intern',
                        title: 'Intern',
                        id: 6,
                      },
                      {
                        name: 'Intern',
                        title: 'Intern',
                        id: 7,
                        children: [
                          {
                            name: 'Intern',
                            title: 'Intern',
                            id: 8,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                name: 'QA Manager',
                title: 'QA Manager',
                id: 6,
                children: [
                  {
                    name: 'QA Engineer',
                    title: 'QA Engineer',
                    id: 7,
                  },
                ],
              },
            ],
          },
          {
            name: 'CFO',
            title: 'Chief Financial Officer',
            id: 8,
            children: [
              {
                name: 'Accountant',
                title: 'Accountant',
                id: 9,
              },
            ],
          },
        ],
      },
    ],
  },
};

export default {
  title: 'Components/Charts/Org',
  component: MKCharts.Org,
  meta: MKOrgChartStory,
};
