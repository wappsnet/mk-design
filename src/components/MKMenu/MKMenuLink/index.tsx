import { ReactNode, useMemo, FC, ComponentProps, useContext } from 'react';

import { clsx } from 'clsx';

import { MKMenuContext } from 'context';

import { MKLink } from 'core/MKLink';

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
  ref,
  ...props
}) => {
  const { design } = useContext(MKMenuContext);
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
    <MKMenuLinkStyled {...props} className={clsx('mk-menu-link', className)} ref={ref} active={active} design={design}>
      {content}
    </MKMenuLinkStyled>
  );
};
