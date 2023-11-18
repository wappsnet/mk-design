import './style.scss';

import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKStyleVariants } from 'types';

export interface MKLayoutCardProps {
  style?: MKStyleVariants;
  shadowless?: boolean;
  borderless?: boolean;
  children?: ReactNode;
}

export const MKLayoutCard: FC<MKLayoutCardProps> = ({
  style = 'primary',
  children,
  shadowless = false,
  borderless = false,
}) => <div className={classNames('mk-layout-card', style, { shadowless, borderless })}>{children}</div>;
