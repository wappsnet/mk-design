import './style.scss';

import { FC, ReactNode } from 'react';

export interface MKColorsWrapperProps {
  children?: ReactNode;
}

export const MKColorsWrapper: FC<MKColorsWrapperProps> = ({ children }) => (
  <div className="mk-color-wrapper">{children}</div>
);
