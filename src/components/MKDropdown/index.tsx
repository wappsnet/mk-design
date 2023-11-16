import { MKDropdownCollapse } from './MKDropdownCollapse';
import { MKDropdownContent } from './MKDropdownContent';
import { MKDropdownGroup } from './MKDropdownGroup';
import { MKDropdownItem } from './MKDropdownItem';
import { MKDropdownToggle } from './MKDropdownToggle';
import { MKDropdownWrapper } from './MKDropdownWrapper';

export const MKDropdown = Object.assign(MKDropdownWrapper, {
  Toggle: MKDropdownToggle,
  Content: MKDropdownContent,
  Collapse: MKDropdownCollapse,
  Group: MKDropdownGroup,
  Item: MKDropdownItem,
});
