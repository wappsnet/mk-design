import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKModalTitleStyled } from './style';

export interface MKModalTitleProps {
  bold?: boolean;
  id?: string;
  children?: ReactNode;
  className?: string;
}

export const MKModalTitle: FC<MKModalTitleProps> = ({ className = '', bold = true, ...props }) => (
  <MKModalTitleStyled
    data-testid="mk-modal-title"
    className={clsx(['mk-modal__title', className])}
    mkBold={bold}
    {...props}
  />
);
