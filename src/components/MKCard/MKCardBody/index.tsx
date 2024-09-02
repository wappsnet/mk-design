import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKCardContext } from 'context';

import { MKCardBodyStyled } from './style';

export interface MKCardBodyProps {
  className?: string;
  children?: ReactNode;
}

export const MKCardBody: FC<MKCardBodyProps> = ({ className = '', children }) => {
  const { compact } = useContext(MKCardContext);
  return (
    <MKCardBodyStyled
      data-testid="mk-card-body"
      className={classNames(['mk-card-body', className, { compact }])}
      compact={compact}
    >
      {children}
    </MKCardBodyStyled>
  );
};
