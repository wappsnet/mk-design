import { FC, ReactNode } from 'react';

export interface MKBadgeRibbonProps {
  children?: ReactNode;
}

const MKBadgeRibbon: FC<MKBadgeRibbonProps> = ({ children }) => <div>{children}</div>;

export default MKBadgeRibbon;
