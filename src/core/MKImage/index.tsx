import { DetailedHTMLProps, FC, ImgHTMLAttributes, useRef } from 'react';
import classNames from 'classnames';

import imageNotFound from 'assets/images/image-not-found.png';
import './style.scss';

export interface MKImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  circle?: boolean;
  height?: number | `${number}`;
  width?: number | `${number}`;
  defaultSrc?: string;
  fit?: 'cover' | 'contain';
  alt?: string;
}

export const MKImage: FC<MKImageProps> = ({
  width = 'auto',
  height = 'auto',
  alt = '',
  src = '',
  fit = 'contain',
  defaultSrc = imageNotFound.src,
  circle = false,
  className = '',
}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <img
      loading="lazy"
      className={classNames(['mk-image', className, { circle }, fit])}
      onError={() => {
        if (imageRef.current) {
          imageRef.current.src = defaultSrc;
        }
      }}
      ref={imageRef}
      width={width}
      height={height}
      src={src || defaultSrc}
      alt={alt}
    />
  );
};
