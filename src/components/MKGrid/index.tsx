import { MKGridCol } from './MKGridCol';
import { MKGridRow } from './MKGridRow';
import { MKGridWrapper } from './MKGridWrapper';

export const MKGrid = Object.assign(MKGridWrapper, {
  Wrapper: MKGridWrapper,
  Row: MKGridRow,
  Col: MKGridCol,
});
