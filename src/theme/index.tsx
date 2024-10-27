import './style.scss';

import { FC, ReactNode } from 'react';

interface MKThemeProps {
  children?: ReactNode;
}

export const MKTheme: FC<MKThemeProps> = ({ children }) => (
  <div className="mk-theme" id="mk-tehem">
    {children}
  </div>
);

export { animate } from './styles/animate.scss';
export { funcs } from './styles/funcs.scss';
export { configs } from './styles/configs.scss';
export { mixins } from './styles/mixins.scss';
export { root } from './styles/root.scss';
