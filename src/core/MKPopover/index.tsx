import { MKPopoverWrapper } from './MKPopoverWrapper';
import { MKPopoverToggle } from './MKPopoverToggle';
import { MKPopoverContent } from './MKPopoverContent';

export const MKPopover = Object.assign(MKPopoverWrapper, {
  Toggle: MKPopoverToggle,
  Content: MKPopoverContent,
});
