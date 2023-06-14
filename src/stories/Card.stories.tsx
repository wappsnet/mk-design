import { Meta } from '@storybook/react';

import MKCard from 'modules/MKCard';

export const Card: Meta<typeof MKCard> = {
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

const CardStories = {
  title: 'Card',
  component: MKCard,
  subcomponents: {
    Header: MKCard.Header,
    Title: MKCard.Title,
    SubTitle: MKCard.SubTitle,
    Body: MKCard.Body,
    Section: MKCard.Section,
    Footer: MKCard.Footer,
    Image: MKCard.Image,
    Overlay: MKCard.Overlay,
  },
};

export default CardStories;
