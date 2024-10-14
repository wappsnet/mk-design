import { FC } from 'react';

import { clsx } from 'clsx';

import { MK_AVATAR_SIZES_MAP } from 'definitions';
import { generateAvatar } from 'helpers';

import { MKAvatarImageStyled } from './style';

export interface MKAvatarImageProps {
  imageUrl?: string;
  title?: string;
  className?: string;
  size?: keyof typeof MK_AVATAR_SIZES_MAP;
  dataTestId?: string;
  borderless?: boolean;
  square?: boolean;
}

export const MKAvatarImage: FC<MKAvatarImageProps> = ({
  size = 'medium',
  imageUrl,
  title = 'A Z',
  className,
  dataTestId = 'mk-image',
  square = false,
}) => (
  <MKAvatarImageStyled
    data-testid={dataTestId}
    width={MK_AVATAR_SIZES_MAP[size].width}
    height={MK_AVATAR_SIZES_MAP[size].width}
    src={imageUrl}
    style={{
      borderWidth: MK_AVATAR_SIZES_MAP[size].borderWidth,
    }}
    defaultSrc={generateAvatar(title, square)}
    circle={!square}
    fit="cover"
    className={clsx(['mk-avatar-img', className])}
  />
);
