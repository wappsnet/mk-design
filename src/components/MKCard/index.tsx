import { MKCardBody } from './MKCardBody';
import { MKCardFooter } from './MKCardFooter';
import { MKCardHeader } from './MKCardHeader';
import { MKCardImage } from './MKCardImage';
import { MKCardOverlay } from './MKCardOverlay';
import { MKCardSection } from './MKCardSection';
import { MKCardSubTitle } from './MKCardSubTitle';
import { MKCardTitle } from './MKCardTitle';
import { MKCardWrapper } from './MKCardWrapper';

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
