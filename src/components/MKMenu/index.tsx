import { default as Wrapper } from './MKMenuWrapper';
import { default as Link } from './MKMenuLink';
import { default as Anchor } from './MKMenuAnchor';

const MKMenu = Object.assign(Wrapper, {
  Link,
  Anchor,
});

export default MKMenu;
