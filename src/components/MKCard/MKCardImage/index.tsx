import { CSSProperties, FC } from 'react';
import classNames from 'classnames';

import './style.scss';

export interface MKCardImageProps {
  defaultImage?: string;
  alt?: string;
  src: string;
  style?: CSSProperties;
  className?: string;
}

export const MKCardImage: FC<MKCardImageProps> = ({ className = '', alt = '', defaultImage = '', src = '' }) => (
  <img
    data-testid="mk-card-image"
    loading="lazy"
    onLoad={(e) => {
      console.log(e);
    }}
    className={classNames(['mk-card__image', className])}
    src={src || defaultImage}
    alt={alt}
  />
);
