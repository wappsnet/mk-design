import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

export interface MKCardSectionProps {
  className?: string;
  inline?: boolean;
  children?: ReactNode;
  compact?: boolean;
}

export const MKCardSection: FC<MKCardSectionProps> = ({ className = '', ...props }) => (
  <div data-testid="mk-card-section" className={classNames(['mk-card__section', className])} {...props} />
);
