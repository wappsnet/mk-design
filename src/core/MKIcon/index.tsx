import { FC, SVGProps, useMemo } from 'react';

import { clsx } from 'clsx';
import { MK_ASSETS } from 'mk-assets/dist/web';

import { MKSizeTypes, MKDesignTypes } from 'types';

import { MKIconStyled } from './style';

interface MKSolidIconProps {
  prefix?: 'solid';
  name: keyof typeof MK_ASSETS.icons.solid;
}

interface MKRegularIconProps {
  prefix?: 'regular';
  name: keyof typeof MK_ASSETS.icons.regular;
}

interface MKBrandsIconProps {
  prefix?: 'brands';
  name: keyof typeof MK_ASSETS.icons.brands;
}

export interface MKIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  design?: MKDesignTypes;
  icon?: MKRegularIconProps | MKBrandsIconProps | MKSolidIconProps | keyof typeof MK_ASSETS.icons.solid;
  size?: MKSizeTypes;
}

export const MKIcon: FC<MKIconProps> = ({
  icon,
  design = 'neutral',
  size = 'responsive',
  className = '',
  ...props
}) => {
  const Icon = useMemo(() => {
    if (typeof icon === 'object') {
      switch (icon.prefix) {
        case 'solid':
          return MK_ASSETS.icons.solid[icon.name];
        case 'regular':
          return MK_ASSETS.icons.regular[icon.name];
        case 'brands':
          return MK_ASSETS.icons.brands[icon.name];
        default:
          return null;
      }
    } else if (typeof icon === 'string') {
      return MK_ASSETS.icons.solid[icon];
    }
  }, [icon]);

  return (
    <MKIconStyled className={clsx('mk-svg-icon', className)} mkSize={size} mkDesign={design}>
      {!!Icon && <Icon {...props} />}
    </MKIconStyled>
  );
};

export default MKIcon;
