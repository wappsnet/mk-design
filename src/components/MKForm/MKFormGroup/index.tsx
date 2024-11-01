import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKAlignTypes, MKGridDirectionTypes, MKGridTypes } from 'types';

import { MKFormGroupStyled } from './style';

export interface MKFormGroupProps {
  direction?: MKGridDirectionTypes;
  children: ReactNode;
  grid?: MKGridTypes;
  align?: MKAlignTypes;
  className?: string;
}

export const MKFormGroup: FC<MKFormGroupProps> = ({
  direction = 'column',
  align = 'start',
  grid = 'section',
  className = '',
  children,
  ...props
}) => (
  <MKFormGroupStyled
    {...props}
    mkGrid={grid}
    mkDirection={direction}
    mkAlign={align}
    className={clsx('mk-fom-group', className)}
  >
    {children}
  </MKFormGroupStyled>
);
