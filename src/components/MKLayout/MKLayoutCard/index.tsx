import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKStyleVariants } from 'types';

type MKLayoutWrapperProps = {
  children?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  brand?: ReactNode;
  className?: string;
  design?: MKStyleVariants;
};

export const MKLayoutCard: FC<MKLayoutWrapperProps> = ({
  children,
  header,
  footer,
  brand,
  className = '',
  design = 'primary',
}) => (
  <section className={classNames(['mk-layout-card', className, design])}>
    <div className="mk-layout-card__wrapper">
      {brand && <div className="mk-layout-card__brand">{brand}</div>}
      {header && <div className="mk-layout-card__header">{header}</div>}
      {children && <div className="mk-layout-card__body">{children}</div>}
      {footer && <div className="mk-layout-card__footer">{footer}</div>}
    </div>
  </section>
);
