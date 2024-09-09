import { FC, ReactNode, useContext } from 'react';

import { MKModalContext } from 'context';

import { MKIcon } from 'core/MKIcon';

import {
  MKModalHeaderCloseStyled,
  MKModalHeaderIconStyled,
  MKModalHeaderStyled,
  MKModalHeaderTitleStyled,
} from './style';

export interface MKModalHeaderProps {
  icon?: ReactNode;
  children?: ReactNode;
  closeButton?: boolean;
}

export const MKModalHeader: FC<MKModalHeaderProps> = ({ icon, closeButton, children }) => {
  const { close } = useContext(MKModalContext);
  return (
    <MKModalHeaderStyled data-testid="mk-modal-header" className="mk-modal-header">
      <MKModalHeaderTitleStyled className="mk-modal-header__title">
        {icon && <MKModalHeaderIconStyled className="mk-modal-header__title-icon">{icon}</MKModalHeaderIconStyled>}
        {children}
      </MKModalHeaderTitleStyled>
      {closeButton && (
        <MKModalHeaderCloseStyled
          className="mk-modal-header__close"
          onClick={() => close?.()}
          data-testid="mk-modal-header-close"
        >
          <MKIcon icon="xmark" />
        </MKModalHeaderCloseStyled>
      )}
    </MKModalHeaderStyled>
  );
};
