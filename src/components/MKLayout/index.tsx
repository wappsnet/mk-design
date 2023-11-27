import { MKLayoutDivider } from './MKLayoutDivider';
import { MKLayoutHeading } from './MKLayoutHeading';
import { MKLayoutSection } from './MKLayoutSection';
import { MKLayoutWrapper } from './MKLayoutWrapper';

export const MKLayout = Object.assign(MKLayoutWrapper, {
  Section: MKLayoutSection,
  Heading: MKLayoutHeading,
  Divider: MKLayoutDivider,
});
