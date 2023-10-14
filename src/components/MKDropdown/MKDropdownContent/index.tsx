import { FC, ReactNode, useContext } from 'react';
import classNames from 'classnames';

import { MKPopover } from 'core/MKPopover';
import { MKDropdownContext } from 'definitions';
import './style.scss';

export interface MKDropdownContentProps {
  children: ReactNode;
  className?: string;
}

export const MKDropdownContent: FC<MKDropdownContentProps> = ({ children, className }) => {
  const { variant } = useContext(MKDropdownContext);

  return (
    <MKPopover.Content>
      {({ placement, triggerWidth, translateX, translateY }, delay) => (
        <div
          style={{
            minWidth: triggerWidth,
            animationDuration: `${delay}ms`,
            transform: `translate(${translateX || 0}, ${translateY || 0})`,
          }}
          data-placement={placement}
          className={classNames('mq-dropdown-content', className, variant)}
        >
          {children}
        </div>
      )}
    </MKPopover.Content>
  );
};
