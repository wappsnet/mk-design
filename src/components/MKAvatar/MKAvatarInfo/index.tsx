import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MK_AVATAR_SIZES_MAP } from 'definitions';
import { MKShapeTypes, MKDesignVariants } from 'types';

import { MKAvatarInfoStyled } from './style';

export interface MKAvatarInfoProps {
  className?: string;
  size?: keyof typeof MK_AVATAR_SIZES_MAP;
  blank?: boolean;
  design?: MKDesignVariants;
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
    className={clsx('mk-avatar-info', className, size, design, shape, { blank })}
    width={MK_AVATAR_SIZES_MAP[size].width}
    border={MK_AVATAR_SIZES_MAP[size].borderWidth}
    blank={blank}
    design={design}
    shape={shape}
  >
    {children}
  </MKAvatarInfoStyled>
);
