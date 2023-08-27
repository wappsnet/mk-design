import { FC, ReactNode } from 'react';

export interface MKBadgeOverlayProps {
  children?: ReactNode;
}

const MKBadgeOverlay: FC<MKBadgeOverlayProps> = ({ children }) => <div>{children}</div>;

export default MKBadgeOverlay;
