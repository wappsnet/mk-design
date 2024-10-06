import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKAlignTypes, MKGridDirectionTypes, MKGridTypes } from '../../../types';

import { MKFormGroupStyled } from './style';

export interface MKFormGroupProps {
  direction?: MKGridDirectionTypes;
  children: ReactNode;
  grid?: MKGridTypes;
  align?: MKAlignTypes;
}

export const MKFormGroup: FC<MKFormGroupProps> = ({
  direction = 'column',
  align = 'start',
  grid = 'section',
  children,
  ...props
}) => (
  <MKFormGroupStyled
    {...props}
    grid={grid}
    direction={direction}
    align={align}
    className={clsx('mk-fom-group', direction, grid, align)}
  >
    {children}
  </MKFormGroupStyled>
);
