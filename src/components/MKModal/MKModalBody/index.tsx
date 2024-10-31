import { FC, ReactNode, useContext } from 'react';

import { MKModalContext } from 'context';

import { MKModalBodyStyled } from './style';

export interface MKModalBodyProps {
  children: ReactNode;
}

export const MKModalBody: FC<MKModalBodyProps> = ({ ...props }) => {
  const { scrollable } = useContext(MKModalContext);
  return (
    <MKModalBodyStyled data-testid="mk-modal-body" className="mk-modal-body" {...props} mkScrollable={scrollable} />
  );
};
