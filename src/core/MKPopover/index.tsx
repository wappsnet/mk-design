import { MKPopoverContent } from './MKPopoverContent';
import { MKPopoverToggle } from './MKPopoverToggle';
import { MKPopoverWrapper } from './MKPopoverWrapper';

export const MKPopover = Object.assign(MKPopoverWrapper, {
  Toggle: MKPopoverToggle,
  Content: MKPopoverContent,
});
