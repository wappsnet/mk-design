import { default as Wrapper } from './MKOverlayWrapper';
import { default as Trigger } from './MKOverlayTrigger';
import { default as Content } from './MKOverlayContent';

const MKOverlay = Object.assign(Wrapper, {
  Trigger,
  Content,
});

export default MKOverlay;
