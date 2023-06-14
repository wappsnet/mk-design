import { default as Wrapper } from './MKPopoverWrapper';
import { default as Toggle } from './MKPopoverToggle';
import { default as Content } from './MKPopoverContent';

const MKPopover = Object.assign(Wrapper, {
  Toggle,
  Content,
});

export default MKPopover;
