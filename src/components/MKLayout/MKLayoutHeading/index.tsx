import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKStyleVariants } from 'types';

export interface MKLayoutHeadingProps {
  style?: MKStyleVariants;
  bolder?: boolean;
  center?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children?: ReactNode;
  caption?: ReactNode;
  divider?: boolean;
}

export const MKLayoutHeading: FC<MKLayoutHeadingProps> = ({
  divider = false,
  bolder = false,
  center = false,
  style = 'primary',
  caption,
  children,
  startIcon,
  endIcon,
}) => (
  <div className={classNames('mk-layout-heading', style, { bolder, center })}>
    {children && (
      <div className="mk-layout-heading__title">
        {startIcon}
        {children}
        {endIcon}
      </div>
    )}
    {caption && <p className="mk-layout-heading__caption">{children}</p>}
    {divider && <hr className="mk-layout-heading__divider" />}
  </div>
);
