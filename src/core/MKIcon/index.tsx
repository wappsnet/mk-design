import { FC, SVGProps, useMemo } from 'react';

import classNames from 'classnames';
import { MK_ASSETS } from 'mk-assets/dist/web';

import { MKSizeTypes, MKThemeVariants } from 'types';

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
  theme?: MKThemeVariants;
  icon?: MKRegularIconProps | MKBrandsIconProps | MKSolidIconProps | keyof typeof MK_ASSETS.icons.solid;
  size?: MKSizeTypes;
}

export const MKIcon: FC<MKIconProps> = ({ icon, theme = 'neutral', size = 'responsive', className = '', ...props }) => {
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
    <MKIconStyled className={classNames('mk-svg-icon', className, size, theme)} size={size} theme={theme}>
      {!!Icon && <Icon {...props} />}
    </MKIconStyled>
  );
};

export default MKIcon;
