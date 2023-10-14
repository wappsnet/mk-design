import { MKGridWrapper } from './MKGridWrapper';
import { MKGridRow } from './MKGridRow';
import { MKGridCol } from './MKGridCol';

export const MKGrid = Object.assign(MKGridWrapper, {
  Wrapper: MKGridWrapper,
  Row: MKGridRow,
  Col: MKGridCol,
});
