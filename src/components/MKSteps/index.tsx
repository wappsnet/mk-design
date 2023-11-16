import { MKStepsItem } from './MKStepsItem';
import { MKStepsNav } from './MKStepsNav';
import { MKStepsWrapper } from './MKStepsWrapper';

export const MKSteps = Object.assign(MKStepsWrapper, {
  Nav: MKStepsNav,
  Item: MKStepsItem,
});
