import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKModalTitleStyled } from './style';

export interface MKModalTitleProps {
  bold?: boolean;
  id?: string;
  children?: ReactNode;
}

export const MKModalTitle: FC<MKModalTitleProps> = ({ bold = true, ...props }) => (
  <MKModalTitleStyled
    data-testid="mk-modal-title"
    className={clsx(['mk-modal__title', { bold }])}
    bold={bold}
    {...props}
  />
);
