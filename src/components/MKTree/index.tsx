import { MKTreeToggle } from './MKThreeToggle';
import { MKTreeGroup } from './MKTreeGroup';
import { MKTreeLeaf } from './MKTreeLeaf';
import { MKTreeWrapper } from './MKTreeWrapper';

export const MKTree = Object.assign(MKTreeWrapper, {
  Group: MKTreeGroup,
  Leaf: MKTreeLeaf,
  Toggle: MKTreeToggle,
});
