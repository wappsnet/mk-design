import { MKGridBox } from './MKGridBox';
import { MKGridCol } from './MKGridCol';
import { MKGridRow } from './MKGridRow';
import { MKGridWrapper } from './MKGridWrapper';

export const MKGrid = Object.assign(MKGridWrapper, {
  Box: MKGridBox,
  Row: MKGridRow,
  Col: MKGridCol,
});
