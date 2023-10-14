import { FC, ReactNode, useContext } from 'react';

import { MKModalContext } from 'definitions';
import './style.scss';

export interface MKModalHeaderProps {
  icon?: ReactNode;
  children?: ReactNode;
  closeButton?: boolean;
}

export const MKModalHeader: FC<MKModalHeaderProps> = ({ icon, closeButton, children }) => {
  const { close } = useContext(MKModalContext);
  return (
    <div data-testid="mk-modal-header" className="mk-modal-header">
      <div className="mk-modal-header__title">
        {icon && <span className="mk-modal-header__title-icon">{icon}</span>}
        {children}
      </div>
      {closeButton && (
        <button className="mk-modal-header__close" onClick={() => close?.()} data-testid="mk-modal-header-close">
          {'✕'}
        </button>
      )}
    </div>
  );
};
