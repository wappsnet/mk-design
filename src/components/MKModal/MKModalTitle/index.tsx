import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKModalTitleStyled } from './style';

export interface MKModalTitleProps {
  bold?: boolean;
  id?: string;
  children?: ReactNode;
}

export const MKModalTitle: FC<MKModalTitleProps> = ({ bold = true, ...props }) => (
  <MKModalTitleStyled
    data-testid="mk-modal-title"
    className={classNames(['mk-modal__title', { bold }])}
    bold={bold}
    {...props}
  />
);
