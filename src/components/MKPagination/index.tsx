import { MKPaginationWrapper } from './MKPaginationWrapper';
import { MKPaginationEllipsis } from './MKPaginationEllipsis';
import { MKPaginationItem } from './MKPaginationItem';
import { MKPaginationNext } from './MKPaginationNext';
import { MKPaginationPrev } from './MKPaginationPrev';
import { MKPaginationFirst } from './MKPaginationFirst';
import { MKPaginationLast } from './MKPaginationLast';

export const MKPagination = Object.assign(MKPaginationWrapper, {
  Item: MKPaginationItem,
  Ellipsis: MKPaginationEllipsis,
  Next: MKPaginationNext,
  Prev: MKPaginationPrev,
  First: MKPaginationFirst,
  Last: MKPaginationLast,
});
