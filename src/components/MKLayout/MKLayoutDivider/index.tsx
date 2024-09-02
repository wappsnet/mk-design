import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKThemeVariants } from 'types';

export interface MKLayoutDividerProps {
  style?: MKThemeVariants;
  label?: ReactNode;
}

export const MKLayoutDivider: FC<MKLayoutDividerProps> = ({ style = 'primary', label }) => {
  if (label) {
    return (
      <div className={classNames('mk-layout-divider', style)}>
        <span className="mk-layout-divider__label">{label}</span>
      </div>
    );
  }

  return <hr className={classNames('mk-layout-divider', style)} />;
};
