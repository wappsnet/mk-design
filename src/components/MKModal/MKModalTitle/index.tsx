import { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './style.scss';

export interface MKModalTitleProps {
  bold?: boolean;
  id?: string;
  children?: ReactNode;
}

export const MKModalTitle: FC<MKModalTitleProps> = ({ bold = true, ...props }) => (
  <h3 data-testid="mk-modal-title" className={classNames(['mk-modal__title', { bold }])} {...props} />
);
