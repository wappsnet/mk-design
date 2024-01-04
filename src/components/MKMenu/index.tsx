import { MKMenuAnchor } from './MKMenuAnchor';
import { MKMenuBar } from './MKMenuBar';
import { MKMenuCollapse } from './MKMenuCollapse';
import { MKMenuGroup } from './MKMenuGroup';
import { MKMenuItem } from './MKMenuItem';
import { MKMenuLink } from './MKMenuLink';
import { MKMenuList } from './MKMenuList';
import { MKMenuWrapper } from './MKMenuWrapper';

export const MKMenu = Object.assign(MKMenuWrapper, {
  Link: MKMenuLink,
  List: MKMenuList,
  Item: MKMenuItem,
  Group: MKMenuGroup,
  Collapse: MKMenuCollapse,
  Bar: MKMenuBar,
  Anchor: MKMenuAnchor,
});
