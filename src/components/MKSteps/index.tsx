import { MKStepsWrapper } from './MKStepsWrapper';
import { MKStepsNav } from './MKStepsNav';
import { MKStepsItem } from './MKStepsItem';

export const MKSteps = Object.assign(MKStepsWrapper, {
  Nav: MKStepsNav,
  Item: MKStepsItem,
});
