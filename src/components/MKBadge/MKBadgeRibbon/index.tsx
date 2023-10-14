import { FC, ReactNode } from 'react';

export interface MKBadgeRibbonProps {
  children?: ReactNode;
}

export const MKBadgeRibbon: FC<MKBadgeRibbonProps> = ({ children }) => <div>{children}</div>;
