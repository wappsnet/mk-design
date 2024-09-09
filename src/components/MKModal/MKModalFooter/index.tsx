import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKJustifyTypes } from 'types';

import { MKModalFooterStyled } from './style';

export interface MKModalFooterProps {
  justify?: MKJustifyTypes;
  children?: ReactNode;
}

export const MKModalFooter: FC<MKModalFooterProps> = ({ justify = 'space-between', ...props }) => (
  <MKModalFooterStyled
    data-testid="mk-modal-footer"
    className={classNames('mk-modal__footer', justify)}
    justify={justify}
    {...props}
  />
);
