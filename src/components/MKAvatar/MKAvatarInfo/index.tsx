import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKThemeVariants } from 'types';

import { MKAvatarInfoStyled } from './style';

export const MKAvatarInfoSizesMap = {
  large: {
    width: 150,
    height: 150,
    borderWidth: 5,
  },
  medium: {
    width: 90,
    height: 90,
    borderWidth: 3,
  },
  small: {
    width: 45,
    height: 45,
    borderWidth: 3,
  },
  tiny: {
    width: 25,
    height: 25,
    borderWidth: 2,
  },
};

export interface MKAvatarInfoProps {
  className?: string;
  size?: keyof typeof MKAvatarInfoSizesMap;
  borderless?: boolean;
  theme?: MKThemeVariants;
  children?: ReactNode;
  square?: boolean;
}

export const MKAvatarInfo: FC<MKAvatarInfoProps> = ({
  children,
  size = 'medium',
  className,
  theme = 'secondary',
  borderless = false,
  square = false,
}) => (
  <MKAvatarInfoStyled
    className={classNames('mk-avatar-info', className, size, theme, { borderless, square })}
    style={{
      width: MKAvatarInfoSizesMap[size].width,
      height: MKAvatarInfoSizesMap[size].height,
    }}
  >
    {children}
  </MKAvatarInfoStyled>
);
