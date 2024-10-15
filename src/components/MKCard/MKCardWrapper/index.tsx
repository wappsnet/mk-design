import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import { MKCardContext } from 'context';
import { MKDesignTypes } from 'types';

import { MKCardWrapperStyled } from './style';

export interface MKCardWrapperProps {
  className?: string;
  children?: ReactNode;
  highlighted?: boolean;
  borderless?: boolean;
  stripped?: boolean;
  compact?: boolean;
  design?: MKDesignTypes;
}

export const MKCardWrapper: FC<MKCardWrapperProps> = ({
  children,
  className,
  design = 'primary',
  stripped = false,
  compact = false,
  borderless = false,
  highlighted = false,
}) => (
  <MKCardContext.Provider
    value={{
      design,
      highlighted,
      borderless,
      stripped,
      compact,
    }}
  >
    <MKCardWrapperStyled
      data-testid="mk-card"
      className={clsx(['mk-card', className, design, { stripped, highlighted, borderless, compact }])}
      highlighted={highlighted}
      borderless={borderless}
    >
      {children}
    </MKCardWrapperStyled>
  </MKCardContext.Provider>
);
