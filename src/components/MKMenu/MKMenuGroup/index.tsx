import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKMenuContext } from 'context';

import { MKMenuGroupContentStyled, MKMenuGroupHeaderStyled, MKMenuGroupIconStyled, MKMenuGroupStyled } from './style';

type MKMenuGroupProps = {
  children: ReactNode;
  label?: ReactNode;
  icon?: ReactNode;
  uppercase?: boolean;
  className?: string;
};

export const MKMenuGroup: FC<MKMenuGroupProps> = ({ children, uppercase = false, className = '', label, icon }) => {
  const { theme } = useContext(MKMenuContext);

  return (
    <MKMenuGroupStyled className={clsx('mk-menu-group', className)}>
      {!!label && (
        <MKMenuGroupHeaderStyled
          className={clsx('mk-menu-group__header', { uppercase })}
          uppercase={uppercase}
          theme={theme}
        >
          {!!icon && <MKMenuGroupIconStyled className="mk-menu-group__header-icon">{icon}</MKMenuGroupIconStyled>}
          <span className="mk-menu-group__header-label">{label}</span>
        </MKMenuGroupHeaderStyled>
      )}
      {children && <MKMenuGroupContentStyled className="mk-menu-group__content">{children}</MKMenuGroupContentStyled>}
    </MKMenuGroupStyled>
  );
};
