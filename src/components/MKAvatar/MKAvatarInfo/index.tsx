import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKStyleVariants } from 'types';

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
  design?: MKStyleVariants;
  children?: ReactNode;
}

export const MKAvatarInfo: FC<MKAvatarInfoProps> = ({
  children,
  size = 'medium',
  className,
  design = 'secondary',
  borderless = false,
}) => (
  <div
    className={classNames(className, size, design, { borderless }, 'mk-avatar-info')}
    style={{
      width: MKAvatarInfoSizesMap[size].width,
      height: MKAvatarInfoSizesMap[size].height,
    }}
  >
    {children}
  </div>
);
