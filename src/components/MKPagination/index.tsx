import { MKPaginationEllipsis } from './MKPaginationEllipsis';
import { MKPaginationFirst } from './MKPaginationFirst';
import { MKPaginationItem } from './MKPaginationItem';
import { MKPaginationLast } from './MKPaginationLast';
import { MKPaginationNext } from './MKPaginationNext';
import { MKPaginationPrev } from './MKPaginationPrev';
import { MKPaginationWrapper } from './MKPaginationWrapper';

export const MKPagination = Object.assign(MKPaginationWrapper, {
  Item: MKPaginationItem,
  Ellipsis: MKPaginationEllipsis,
  Next: MKPaginationNext,
  Prev: MKPaginationPrev,
  First: MKPaginationFirst,
  Last: MKPaginationLast,
});
