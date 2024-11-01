import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKMenuContext } from 'context';

import { MKMenuItemStyled } from './style';

type MKMenuItemProps = {
  children?: ReactNode;
  className?: string;
};

export const MKMenuItem: FC<MKMenuItemProps> = ({ children, className = '' }) => {
  const { design } = useContext(MKMenuContext);

  return (
    <MKMenuItemStyled className={clsx('mk-menu-item', className)} mkDesign={design}>
      {children}
    </MKMenuItemStyled>
  );
};
