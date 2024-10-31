import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKJustifyTypes } from 'types';

import { MKModalFooterStyled } from './style';

export interface MKModalFooterProps {
  justify?: MKJustifyTypes;
  children?: ReactNode;
}

export const MKModalFooter: FC<MKModalFooterProps> = ({ justify = 'space-between', ...props }) => (
  <MKModalFooterStyled
    data-testid="mk-modal-footer"
    className={clsx('mk-modal__footer', justify)}
    mkJustify={justify}
    {...props}
  />
);
