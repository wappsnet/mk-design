import { MKButton } from 'components/MKButton';
import { MKCard } from 'components/MKCard';

interface MKCardStoryProps {
  title?: string;
  subtitle?: string;
  footer?: boolean;
  header?: boolean;
  overlay?: boolean;
  image?: string;
  content: string;
}

export const MKCardStory = {
  render: ({
    image = '',
    content,
    title = '',
    subtitle = '',
    header = true,
    footer = true,
    overlay = false,
    ...args
  }: MKCardStoryProps & Parameters<typeof MKCard>) => (
    <MKCard {...args}>
      {header && (
        <MKCard.Header wrap={!!title && !!subtitle}>
          <MKCard.Title>{title}</MKCard.Title>
          <MKCard.SubTitle>{subtitle}</MKCard.SubTitle>
        </MKCard.Header>
      )}
      <MKCard.Body>
        {!!image && <MKCard.Image src={image} />}
        {overlay ? <MKCard.Overlay>{content && <MKCard.Section>{content}</MKCard.Section>}</MKCard.Overlay> : content}
      </MKCard.Body>
      {footer && (
        <MKCard.Footer justify="end">
          <MKButton>{'Test'}</MKButton>
        </MKCard.Footer>
      )}
    </MKCard>
  ),
  args: {
    content: '',
    overlay: false,
    header: true,
    footer: true,
    title: 'Title',
    subtitle: 'Subtitle',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
  },
};

export default {
  title: 'Components/Card',
  component: MKCard,
  meta: MKCardStory,
};
