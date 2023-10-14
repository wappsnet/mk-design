import { MKCardBody } from './MKCardBody';
import { MKCardFooter } from './MKCardFooter';
import { MKCardHeader } from './MKCardHeader';
import { MKCardOverlay } from './MKCardOverlay';
import { MKCardImage } from './MKCardImage';
import { MKCardWrapper } from './MKCardWrapper';
import { MKCardSection } from './MKCardSection';
import { MKCardSubTitle } from './MKCardSubTitle';
import { MKCardTitle } from './MKCardTitle';

export const MKCard = Object.assign(MKCardWrapper, {
  Title: MKCardTitle,
  SubTitle: MKCardSubTitle,
  Body: MKCardBody,
  Header: MKCardHeader,
  Footer: MKCardFooter,
  Image: MKCardImage,
  Overlay: MKCardOverlay,
  Section: MKCardSection,
});
