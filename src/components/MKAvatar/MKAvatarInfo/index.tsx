import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MK_AVATAR_SIZES_MAP } from 'definitions';
import { MKShapeTypes, MKDesignTypes } from 'types';

import { MKAvatarInfoStyled } from './style';

export interface MKAvatarInfoProps {
  className?: string;
  size?: keyof typeof MK_AVATAR_SIZES_MAP;
  blank?: boolean;
  design?: MKDesignTypes;
  children?: ReactNode;
  shape?: MKShapeTypes;
}

export const MKAvatarInfo: FC<MKAvatarInfoProps> = ({
  children,
  size = 'medium',
  className,
  design = 'secondary',
  blank = false,
  shape = 'circle',
}) => (
  <MKAvatarInfoStyled
    className={clsx('mk-avatar-info', className)}
    mkWidth={MK_AVATAR_SIZES_MAP[size].size}
    mkBorder={MK_AVATAR_SIZES_MAP[size].border}
    mkBlank={blank}
    mkDesign={design}
    mkShape={shape}
  >
    {children}
  </MKAvatarInfoStyled>
);
