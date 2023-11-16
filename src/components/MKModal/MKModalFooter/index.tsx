import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import './style.scss';

export interface MKModalFooterProps {
  align?: 'end' | 'start' | 'space-between';
  children?: ReactNode;
}

export const MKModalFooter: FC<MKModalFooterProps> = ({ align = 'space-between', ...props }) => (
  <div data-testid="mk-modal-footer" className={classNames('mk-modal__footer', align)} {...props} />
);
