import { default as Wrapper } from './MKDropdownWrapper';
import { default as Toggle } from './MKDropdownToggle';
import { default as Content } from './MKDropdownContent';
import { default as Item } from './MKDropdownItem';
import { default as Group } from './MKDropdownGroup';
import { default as Collapse } from './MKDropdownCollapse';

const MKDropdown = Object.assign(Wrapper, {
  Toggle,
  Content,
  Collapse,
  Group,
  Item,
});

export default MKDropdown;
