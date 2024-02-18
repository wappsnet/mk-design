import { MKLayoutBanner } from './MKLayoutBanner';
import { MKLayoutBody } from './MKLayoutBody';
import { MKLayoutCard } from './MKLayoutCard';
import { MKLayoutContent } from './MKLayoutContent';
import { MKLayoutDivider } from './MKLayoutDivider';
import { MKLayoutFooter } from './MKLayoutFooter';
import { MKLayoutHeader } from './MKLayoutHeader';
import { MKLayoutHeading } from './MKLayoutHeading';
import { MKLayoutSection } from './MKLayoutSection';
import { MKLayoutSidebar } from './MKLayoutSidebar';
import { MKLayoutToggle } from './MKLayoutToggle';
import { MKLayoutWrapper } from './MKLayoutWrapper';

export const MKLayout = Object.assign(MKLayoutWrapper, {
  Section: MKLayoutSection,
  Heading: MKLayoutHeading,
  Divider: MKLayoutDivider,
  Content: MKLayoutContent,
  Sidebar: MKLayoutSidebar,
  Header: MKLayoutHeader,
  Toggle: MKLayoutToggle,
  Banner: MKLayoutBanner,
  Body: MKLayoutBody,
  Footer: MKLayoutFooter,
  Card: MKLayoutCard,
});
