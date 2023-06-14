import { FC, ReactNode } from 'react';

import './style.scss';

export interface MKModalBodyProps {
  children: ReactNode;
}

const MKModalBody: FC<MKModalBodyProps> = ({ ...props }) => (
  <div data-testid="mk-modal-body" className="mk-modal-body" {...props} />
);

export default MKModalBody;
