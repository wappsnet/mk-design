import { default as Wrapper } from './MKListWrapper';
import { default as Item } from './MKListItem';

const MKList = Object.assign(Wrapper, {
  Item,
});

export default MKList;
