import { MKLayoutBody } from './MKLayoutBody';
import { MKLayoutContent } from './MKLayoutContent';
import { MKLayoutDivider } from './MKLayoutDivider';
import { MKLayoutFooter } from './MKLayoutFooter';
import { MKLayoutHeader } from './MKLayoutHeader';
import { MKLayoutHeading } from './MKLayoutHeading';
import { MKLayoutSection } from './MKLayoutSection';
import { MKLayoutSidebar } from './MKLayoutSidebar';
import { MKLayoutWrapper } from './MKLayoutWrapper';

export const MKLayout = Object.assign(MKLayoutWrapper, {
  Section: MKLayoutSection,
  Heading: MKLayoutHeading,
  Divider: MKLayoutDivider,
  Content: MKLayoutContent,
  Sidebar: MKLayoutSidebar,
  Header: MKLayoutHeader,
  Body: MKLayoutBody,
  Footer: MKLayoutFooter,
});
