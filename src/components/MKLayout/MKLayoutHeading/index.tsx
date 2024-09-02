import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKThemeVariants } from 'types';

import {
  MKLayoutHeadingCaptionStyled,
  MKLayoutHeadingDividerStyled,
  MKLayoutHeadingStyled,
  MKLayoutHeadingTitleStyled,
} from './style';

export interface MKLayoutHeadingProps {
  theme?: MKThemeVariants;
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
  theme = 'primary',
  caption,
  children,
  startIcon,
  endIcon,
}) => (
  <MKLayoutHeadingStyled
    className={classNames('mk-layout-heading', theme, { bold, center, compact })}
    theme={theme}
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
