import { FC } from 'react';
import classNames from 'classnames';

import { generateAvatar } from 'helpers';
import { MKImage } from 'core/MKImage';
import './style.scss';

export const MKAvatarImageSizesMap = {
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

export interface MKAvatarImageProps {
  imageUrl?: string;
  title?: string;
  className?: string;
  size?: keyof typeof MKAvatarImageSizesMap;
  dataTestId?: string;
  borderless?: boolean;
}

export const MKAvatarImage: FC<MKAvatarImageProps> = ({
  size = 'medium',
  imageUrl,
  title = 'A Z',
  className,
  dataTestId = 'mk-image',
}) => (
  <MKImage
    data-testid={dataTestId}
    width={MKAvatarImageSizesMap[size].width}
    height={MKAvatarImageSizesMap[size].height}
    src={imageUrl}
    style={{
      borderWidth: MKAvatarImageSizesMap[size].borderWidth,
    }}
    defaultSrc={generateAvatar(title)}
    className={classNames(className, size, 'mk-avatar-img')}
  />
);
