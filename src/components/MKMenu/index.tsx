import { MKMenuAnchor } from './MKMenuAnchor';
import { MKMenuLink } from './MKMenuLink';
import { MKMenuWrapper } from './MKMenuWrapper';

export const MKMenu = Object.assign(MKMenuWrapper, {
  Link: MKMenuLink,
  Anchor: MKMenuAnchor,
});
