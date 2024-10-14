import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKDesignVariants } from 'types';

import {
  MKLayoutCardBodyStyled,
  MKLayoutCardBrandStyled,
  MKLayoutCardFooterStyled,
  MKLayoutCardHeaderStyled,
  MKLayoutCardStyled,
  MKLayoutCardWrapperStyled,
} from './style';

type MKLayoutWrapperProps = {
  children?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  brand?: ReactNode;
  className?: string;
  design?: MKDesignVariants;
  highlighted?: boolean;
};

export const MKLayoutCard: FC<MKLayoutWrapperProps> = ({
  children,
  header,
  footer,
  brand,
  className = '',
  highlighted = false,
  design = 'primary',
}) => (
  <MKLayoutCardStyled className={clsx(['mk-layout-card', className, design, { highlighted }])}>
    <MKLayoutCardWrapperStyled className="mk-layout-card__wrapper" highlighted={highlighted}>
      {brand && <MKLayoutCardBrandStyled className="mk-layout-card__brand">{brand}</MKLayoutCardBrandStyled>}
      {header && (
        <MKLayoutCardHeaderStyled className="mk-layout-card__header" design={design}>
          {header}
        </MKLayoutCardHeaderStyled>
      )}
      {children && (
        <MKLayoutCardBodyStyled className="mk-layout-card__body" highlighted={highlighted}>
          {children}
        </MKLayoutCardBodyStyled>
      )}
      {footer && <MKLayoutCardFooterStyled className="mk-layout-card__footer">{footer}</MKLayoutCardFooterStyled>}
    </MKLayoutCardWrapperStyled>
  </MKLayoutCardStyled>
);
