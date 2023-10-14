import { MKMenuWrapper } from './MKMenuWrapper';
import { MKMenuLink } from './MKMenuLink';
import { MKMenuAnchor } from './MKMenuAnchor';

export const MKMenu = Object.assign(MKMenuWrapper, {
  Link: MKMenuLink,
  Anchor: MKMenuAnchor,
});
