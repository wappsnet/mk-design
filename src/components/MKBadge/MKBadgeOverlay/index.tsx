import { FC, ReactNode } from 'react';

export interface MKBadgeOverlayProps {
  children?: ReactNode;
}

export const MKBadgeOverlay: FC<MKBadgeOverlayProps> = ({ children }) => <div>{children}</div>;
