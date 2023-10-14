import { MKOverlayWrapper } from './MKOverlayWrapper';
import { MKOverlayTrigger } from './MKOverlayTrigger';
import { MKOverLayContent } from './MKOverlayContent';

export const MKOverlay = Object.assign(MKOverlayWrapper, {
  Trigger: MKOverlayTrigger,
  Content: MKOverLayContent,
});
