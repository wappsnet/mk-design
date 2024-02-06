import './style.scss';

import { FC, SVGProps, useMemo } from 'react';

import classNames from 'classnames';
import { MK_ASSETS } from 'mk-assets/dist/web';

import { MKStyleVariants } from 'types';

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
  design?: MKStyleVariants;
  icon?: MKRegularIconProps | MKBrandsIconProps | MKSolidIconProps | keyof typeof MK_ASSETS.icons.solid;
}

export const MKIcon: FC<MKIconProps> = ({ icon, className = '', ...props }) => {
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

  return <span className={classNames('mk-svg-icon', className)}>{!!Icon && <Icon {...props} />}</span>;
};

export default MKIcon;
