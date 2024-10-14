import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKDesignVariants } from 'types';

import {
  MKLayoutHeadingCaptionStyled,
  MKLayoutHeadingDividerStyled,
  MKLayoutHeadingStyled,
  MKLayoutHeadingTitleStyled,
} from './style';

export interface MKLayoutHeadingProps {
  design?: MKDesignVariants;
  bold?: boolean;
  center?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children?: ReactNode;
  caption?: ReactNode;
  compact?: boolean;
  divider?: boolean;
}

export const MKLayoutHeading: FC<MKLayoutHeadingProps> = ({
  divider = false,
  bold = false,
  center = false,
  compact = false,
  design = 'primary',
  caption,
  children,
  startIcon,
  endIcon,
}) => (
  <MKLayoutHeadingStyled
    className={clsx('mk-layout-heading', design, { bold, center, compact })}
    design={design}
    compact={compact}
    bold={bold}
    center={center}
  >
    {children && (
      <MKLayoutHeadingTitleStyled className="mk-layout-heading__title" compact={compact}>
        {startIcon}
        {children}
        {endIcon}
      </MKLayoutHeadingTitleStyled>
    )}
    {caption && (
      <MKLayoutHeadingCaptionStyled className="mk-layout-heading__caption">{children}</MKLayoutHeadingCaptionStyled>
    )}
    {divider && <MKLayoutHeadingDividerStyled className="mk-layout-heading__divider" />}
  </MKLayoutHeadingStyled>
);
