import { MKOverLayContent } from './MKOverlayContent';
import { MKOverlayTrigger } from './MKOverlayTrigger';
import { MKOverlayWrapper } from './MKOverlayWrapper';

export const MKOverlay = Object.assign(MKOverlayWrapper, {
  Trigger: MKOverlayTrigger,
  Content: MKOverLayContent,
});
