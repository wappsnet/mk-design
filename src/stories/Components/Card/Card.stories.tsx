import { Meta } from '@storybook/react';

import { MKCard } from 'components/MKCard';

export const MKCardStory: Meta<typeof MKCard> = {
  render: (args) => (
    <MKCard {...args}>
      <MKCard.Header>
        <MKCard.Title>{'Title'}</MKCard.Title>
        <MKCard.SubTitle>{'SubTitle'}</MKCard.SubTitle>
      </MKCard.Header>
      <MKCard.Body>
        <MKCard.Image src={''} />
        {'Content'}
      </MKCard.Body>
      <MKCard.Footer>{'Footer'}</MKCard.Footer>
    </MKCard>
  ),
};

export default {
  title: 'Components/Card',
  component: MKCard,
  meta: MKCardStory,
};
