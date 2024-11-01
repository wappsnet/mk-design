import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKDesignTypes } from 'types';

import {
  MKLayoutHeadingCaptionStyled,
  MKLayoutHeadingDividerStyled,
  MKLayoutHeadingStyled,
  MKLayoutHeadingTitleStyled,
} from './style';

export interface MKLayoutHeadingProps {
  design?: MKDesignTypes;
  bold?: boolean;
  centered?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children?: ReactNode;
  caption?: ReactNode;
  compact?: boolean;
  divider?: boolean;
  className?: string;
}

export const MKLayoutHeading: FC<MKLayoutHeadingProps> = ({
  divider = false,
  bold = false,
  centered = false,
  compact = false,
  design = 'primary',
  className = '',
  caption,
  children,
  startIcon,
  endIcon,
}) => (
  <MKLayoutHeadingStyled
    className={clsx('mk-layout-heading', className)}
    mkDesign={design}
    mkCompact={compact}
    mkBold={bold}
    mkCentered={centered}
  >
    {children && (
      <MKLayoutHeadingTitleStyled className="mk-layout-heading__title" mkCompact={compact}>
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
