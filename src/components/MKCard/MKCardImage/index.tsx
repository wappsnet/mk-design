import { CSSProperties, FC } from 'react';

import { clsx } from 'clsx';

import { MKCardImageStyled } from './style';

export interface MKCardImageProps {
  defaultImage?: string;
  alt?: string;
  src: string;
  style?: CSSProperties;
  className?: string;
}

export const MKCardImage: FC<MKCardImageProps> = ({ className = '', alt = '', defaultImage = '', src = '' }) => (
  <MKCardImageStyled
    data-testid="mk-card-image"
    loading="lazy"
    className={clsx('mk-card__image', className)}
    src={src ?? defaultImage}
    alt={alt}
  />
);
