import { default as Wrapper } from './MKPaginationWrapper';
import { default as Ellipsis } from './MKPaginationEllipsis';
import { default as Item } from './MKPaginationItem';
import { default as Next } from './MKPaginationNext';
import { default as Prev } from './MKPaginationPrev';
import { default as First } from './MKPaginationFirst';
import { default as Last } from './MKPaginationLast';

const MKPagination = Object.assign(Wrapper, {
  Item,
  Ellipsis,
  Next,
  Prev,
  First,
  Last,
});

export default MKPagination;
