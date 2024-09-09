import { ReactNode, useMemo, FC, ComponentProps, useContext } from 'react';

import classNames from 'classnames';

import { MKLink } from 'core/MKLink';

import { MKMenuContext } from '../../../context';

import { MKMenuLinkIconStyled, MKMenuLinkLabelStyled, MKMenuLinkStyled } from './style';

export interface MKMenuLinkProps extends ComponentProps<typeof MKLink> {
  active?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  className?: string;
  truncate?: boolean;
}

export const MKMenuLink: FC<MKMenuLinkProps> = ({
  children,
  className = '',
  startIcon,
  endIcon,
  active = false,
  instance,
  ...props
}) => {
  const { theme } = useContext(MKMenuContext);
  const content = useMemo(
    () => (
      <>
        {startIcon && <MKMenuLinkIconStyled className="mk-menu-link__start-icon">{startIcon}</MKMenuLinkIconStyled>}
        {children && <MKMenuLinkLabelStyled className="mk-menu-link__label">{children}</MKMenuLinkLabelStyled>}
        {endIcon && <MKMenuLinkIconStyled className="mk-menu-link__end-icon">{endIcon}</MKMenuLinkIconStyled>}
      </>
    ),
    [startIcon, children, endIcon],
  );

  return (
    <MKMenuLinkStyled
      {...props}
      className={classNames('mk-menu-link', className)}
      ref={instance}
      active={active}
      theme={theme}
    >
      {content}
    </MKMenuLinkStyled>
  );
};
