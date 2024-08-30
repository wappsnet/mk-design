import { DetailedHTMLProps, FC, ImgHTMLAttributes, useRef } from 'react';

import classNames from 'classnames';

import { MK_ASSETS } from 'definitions';

import { MKImageStyled } from './style';

export interface MKImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  circle?: boolean;
  height?: number | `${number}` | `${number}%` | 'auto';
  width?: number | `${number}` | `${number}%` | 'auto';
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
  defaultSrc = MK_ASSETS.images.notFound,
  circle = false,
  className = '',
}) => {
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <MKImageStyled
      loading="lazy"
      className={classNames(['mk-image', className, { circle }, fit])}
      circle={circle}
      fit={fit}
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
