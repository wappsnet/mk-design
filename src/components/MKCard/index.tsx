import { default as Body } from './MKCardBody';
import { default as Footer } from './MKCardFooter';
import { default as Header } from './MKCardHeader';
import { default as Image } from './MQCardImage';
import { default as Overlay } from './MKCardOverlay';
import { default as Wrapper } from './MKCardWrapper';
import { default as Section } from './MKCardSection';
import { default as SubTitle } from './MKCardSubTitle';
import { default as Title } from './MKCardTitle';

const MQCard = Object.assign(Wrapper, {
  Title,
  SubTitle,
  Body,
  Header,
  Footer,
  Image,
  Overlay,
  Section,
});

export default MQCard;
