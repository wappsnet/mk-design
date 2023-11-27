import './style.scss';

import { FC, ReactNode } from 'react';

interface MKThemeProps {
  children?: ReactNode;
}

export const MKTheme: FC<MKThemeProps> = ({ children }) => (
  <div className="mk-theme" id="mk-theme">
    {children}
  </div>
);
