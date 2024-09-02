import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKThemeVariants } from 'types';

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
  theme?: MKThemeVariants;
  highlighted?: boolean;
};

export const MKLayoutCard: FC<MKLayoutWrapperProps> = ({
  children,
  header,
  footer,
  brand,
  className = '',
  highlighted = false,
  theme = 'primary',
}) => (
  <MKLayoutCardStyled className={classNames(['mk-layout-card', className, theme, { highlighted }])}>
    <MKLayoutCardWrapperStyled className="mk-layout-card__wrapper" highlighted={highlighted}>
      {brand && <MKLayoutCardBrandStyled className="mk-layout-card__brand">{brand}</MKLayoutCardBrandStyled>}
      {header && (
        <MKLayoutCardHeaderStyled className="mk-layout-card__header" theme={theme}>
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
