import { MKSortableCell } from './MKSortableCell';
import { MKSortableHandle } from './MKSortableHandle';
import { MKSortableItem } from './MKSortableItem';
import { MKSortableProvider } from './MKSortableProvider';
import { MKSortableRow } from './MKSortableRow';
import { MKSortableSection } from './MKSortableSection';
import { MKSortableWrapper } from './MKSortableWrapper';

export const MQSortable = Object.assign(MKSortableProvider, {
  Wrapper: MKSortableWrapper,
  Handle: MKSortableHandle,
  Item: MKSortableItem,
  Row: MKSortableRow,
  Section: MKSortableSection,
  Cell: MKSortableCell,
});
