import { MKPaginationItem } from './MKPaginationItem';
import { MKPaginationLink } from './MKPaginationLink';
import { MKPaginationWrapper } from './MKPaginationWrapper';

export const MKPagination = Object.assign(MKPaginationWrapper, {
  Item: MKPaginationItem,
  Link: MKPaginationLink,
});
