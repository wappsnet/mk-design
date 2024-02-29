import './style.scss';

import { FC, ReactNode, useContext } from 'react';

import classNames from 'classnames';

import { MKDropdownContext } from 'context';

import { MKPopover } from 'core/MKPopover';

export interface MKDropdownContentProps {
  children: ReactNode;
  className?: string;
}

export const MKDropdownContent: FC<MKDropdownContentProps> = ({ children, className }) => {
  const { design } = useContext(MKDropdownContext);

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
          className={classNames('mq-dropdown-content', className, design)}
        >
          <div className="mk-dropdown-content__container">{children}</div>
        </div>
      )}
    </MKPopover.Content>
  );
};
