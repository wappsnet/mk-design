import { Meta } from '@storybook/react';

import { MKIcon } from 'core/MKIcon';

import { MKAvatar } from 'components/MKAvatar';
import { MKButton } from 'components/MKButton';
import { MKCard } from 'components/MKCard';
import { MKCharts } from 'components/MKCharts';
import { MKDnD } from 'components/MKDnD';

export const MKOrgChartStory: Meta<typeof MKCharts.Org> = {
  render: (args) => (
    <MKDnD>
      <MKCharts.Org
        {...args}
        render={(props) => {
          const children = props.data.children || props.data._children;
          return (
            <MKCard highlighted fill>
              <MKCard.Header>
                <MKCard.Title>
                  <MKAvatar.Image title={props.data.title} size="tiny" />
                  {props.data.title}
                </MKCard.Title>
                <MKButton
                  shape="square"
                  icon={{
                    position: 'end',
                    node: <MKIcon icon="arrows-up-down-left-right" />,
                  }}
                />
              </MKCard.Header>
              <MKCard.Body>{props.data.name}</MKCard.Body>
              <MKCard.Footer justify="center">
                {!!children?.length && (
                  <MKButton
                    shape="circle"
                    onClick={() => {
                      if (props.data.children) {
                        props.data._children = props.data.children;
                        props.data.children = null;
                      } else {
                        props.data.children = props.data._children;
                        props.data._children = null;
                      }
                      props.draw();
                    }}
                  >
                    {children.length}
                  </MKButton>
                )}
              </MKCard.Footer>
            </MKCard>
          );
        }}
      />
    </MKDnD>
  ),
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
