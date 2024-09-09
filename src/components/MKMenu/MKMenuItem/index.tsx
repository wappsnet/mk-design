import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKMenuContext } from 'context';

import { MKMenuItemStyled } from './style';

type MKMenuItemProps = {
  children?: ReactNode;
  className?: string;
};

export const MKMenuItem: FC<MKMenuItemProps> = ({ children, className = '' }) => {
  const { theme } = useContext(MKMenuContext);

  return <MKMenuItemStyled className={classNames('mk-menu-item', className, theme)}>{children}</MKMenuItemStyled>;
};
