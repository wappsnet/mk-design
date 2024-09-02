import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKCardContext } from 'context';
import { MKThemeVariants } from 'types';

import { MKCardWrapperStyled } from './style';

export interface MKCardWrapperProps {
  className?: string;
  children?: ReactNode;
  highlighted?: boolean;
  borderless?: boolean;
  stripped?: boolean;
  compact?: boolean;
  theme?: MKThemeVariants;
}

export const MKCardWrapper: FC<MKCardWrapperProps> = ({
  children,
  className,
  theme = 'primary',
  stripped = false,
  compact = false,
  borderless = false,
  highlighted = false,
}) => (
  <MKCardContext.Provider
    value={{
      theme,
      highlighted,
      borderless,
      stripped,
      compact,
    }}
  >
    <MKCardWrapperStyled
      data-testid="mk-card"
      className={classNames(['mk-card', className, theme, { stripped, highlighted, borderless, compact }])}
      highlighted={highlighted}
      borderless={borderless}
    >
      {children}
    </MKCardWrapperStyled>
  </MKCardContext.Provider>
);
