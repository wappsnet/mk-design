import './style.scss';

import { FC, ReactNode } from 'react';

export interface MKModalBodyProps {
  children: ReactNode;
}

export const MKModalBody: FC<MKModalBodyProps> = ({ ...props }) => (
  <div data-testid="mk-modal-body" className="mk-modal-body" {...props} />
);
