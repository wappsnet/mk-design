import { MKDropdownWrapper } from './MKDropdownWrapper';
import { MKDropdownToggle } from './MKDropdownToggle';
import { MKDropdownContent } from './MKDropdownContent';
import { MKDropdownItem } from './MKDropdownItem';
import { MKDropdownGroup } from './MKDropdownGroup';
import { MKDropdownCollapse } from './MKDropdownCollapse';

export const MKDropdown = Object.assign(MKDropdownWrapper, {
  Toggle: MKDropdownToggle,
  Content: MKDropdownContent,
  Collapse: MKDropdownCollapse,
  Group: MKDropdownGroup,
  Item: MKDropdownItem,
});
