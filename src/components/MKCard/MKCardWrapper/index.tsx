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
  fill?: boolean;
}

export const MKCardWrapper: FC<MKCardWrapperProps> = ({
  children,
  className,
  design = 'primary',
  stripped = false,
  compact = false,
  borderless = false,
  highlighted = false,
  fill = false,
  ...props
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
      {...props}
      data-testid="mk-card"
      className={clsx(['mk-card', className])}
      mkHighlighted={highlighted}
      mkBorderless={borderless}
      mkFill={fill}
    >
      {children}
    </MKCardWrapperStyled>
  </MKCardContext.Provider>
);
