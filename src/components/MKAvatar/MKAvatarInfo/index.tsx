import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import { MKStyleVariants } from 'types';
import './style.scss';

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
  variant?: MKStyleVariants;
  children?: ReactNode;
}

const MKAvatarInfo: FC<MKAvatarInfoProps> = ({
  children,
  size = 'medium',
  className,
  variant = 'secondary',
  borderless = false,
}) => (
  <div
    className={classNames(className, size, variant, { borderless }, 'mk-avatar-info')}
    style={{
      width: MKAvatarInfoSizesMap[size].width,
      height: MKAvatarInfoSizesMap[size].height,
    }}
  >
    {children}
  </div>
);

export default MKAvatarInfo;
