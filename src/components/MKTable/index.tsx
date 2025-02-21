import { MKTableTd } from './MKTableTd';
import { MKTableWrapper } from './MKTableWrapper';

export const MKTable = Object.assign(MKTableWrapper, {
  TD: MKTableTd,
});
