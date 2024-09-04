import { FC, ReactNode } from 'react';

import { MKModalBodyStyled } from './style';

export interface MKModalBodyProps {
  children: ReactNode;
}

export const MKModalBody: FC<MKModalBodyProps> = ({ ...props }) => (
  <MKModalBodyStyled data-testid="mk-modal-body" className="mk-modal-body" {...props} />
);
