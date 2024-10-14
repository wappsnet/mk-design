import { FC, ReactNode, useContext } from 'react';

import { clsx } from 'clsx';

import { MKDropdownContext } from 'context';

import { MKPopover } from 'core/MKPopover';

import { MKDropdownContainerStyled, MKDropdownContentStyled } from './style';

export interface MKDropdownContentProps {
  children: ReactNode;
  className?: string;
}

export const MKDropdownContent: FC<MKDropdownContentProps> = ({ children, className }) => {
  const { design } = useContext(MKDropdownContext);

  return (
    <MKPopover.Content>
      {({ placement, triggerWidth, translateX, translateY }, delay) => (
        <MKDropdownContentStyled
          minWidth={triggerWidth}
          delay={typeof delay === 'number' ? delay : delay.show}
          translateX={translateX ?? 0}
          translateY={translateY ?? 0}
          data-placement={placement}
          className={clsx('mq-dropdown-content', className, design)}
        >
          <MKDropdownContainerStyled className="mk-dropdown-content__container" design={design}>
            {children}
          </MKDropdownContainerStyled>
        </MKDropdownContentStyled>
      )}
    </MKPopover.Content>
  );
};
