import { default as Wrapper } from './MKStepsWrapper';
import { default as Nav } from './MKStepsNav';
import { default as Item } from './MKStepsItem';

const MKSteps = Object.assign(Wrapper, {
  Nav,
  Item,
});

export default MKSteps;
