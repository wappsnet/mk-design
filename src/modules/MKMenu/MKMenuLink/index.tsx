import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './style.scss';

export interface MKMenuLinkProps extends Location, HTMLHyperlinkElementUtils {
  active?: boolean;
  disabled?: boolean;
  onNavigate?: (href: string) => void;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const MKMenuLink: FC<MKMenuLinkProps> = ({
  children,
  className = '',
  startIcon,
  endIcon,
  href = '',
  onNavigate,
  ...props
}) => (
  <a
    {...props}
    href={href}
    className={classNames('mk-menu-link', className)}
    onClick={(e) => {
      if (onNavigate) {
        e.preventDefault();
        onNavigate(href);
      }
    }}
  >
    {startIcon && <span className="mk-menu-link__start-icon">{startIcon}</span>}
    {children && <span className="mk-menu-link__label">{children}</span>}
    {endIcon && <span className="mk-menu-link__end-icon">{endIcon}</span>}
  </a>
);

export default MKMenuLink;
