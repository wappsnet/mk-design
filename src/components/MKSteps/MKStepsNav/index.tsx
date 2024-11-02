import './style.scss';

import { FC, useContext, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKStepsContext } from 'context';

import {
  MKStepsNavItemButtonStyled,
  MKStepsNavItemContainerStyled,
  MKStepsNavItemContentStyled,
  MKStepsNavItemDescriptionStyled,
  MKStepsNavItemIconStyled,
  MKStepsNavItemLabelStyled,
  MKStepsNavItemStyled,
  MKStepsNavStyled,
} from './style';

interface MKStepsNavProps {
  className?: string;
}

export const MKStepsNav: FC<MKStepsNavProps> = ({ className = '' }) => {
  const { steps = [], active, orientation, design, onChange } = useContext(MKStepsContext);
  const index = useMemo(() => steps.findIndex((step) => step.name === active), [steps, active]);

  return (
    <MKStepsNavStyled className={clsx('mk-steps-nav', className)} mkDesign={design} mkOrientation={orientation}>
      {steps.map((step, i) => (
        <MKStepsNavItemStyled
          key={step.name}
          className="mk-steps-nav__item"
          mkActive={active === step.name}
          mkStateless={!onChange}
          mkFinished={i < index}
          mkInactive={i > index}
        >
          <MKStepsNavItemContainerStyled className="mk-steps-nav__item-container">
            <MKStepsNavItemButtonStyled
              onClick={() => {
                onChange?.(step.name);
              }}
              className="mk-steps-nav__item-header"
            >
              <MKStepsNavItemIconStyled className="mk-steps-nav__item-icon">{step.icon}</MKStepsNavItemIconStyled>
            </MKStepsNavItemButtonStyled>
            <MKStepsNavItemContentStyled className="mk-step-nav__item-content">
              <MKStepsNavItemLabelStyled className="mk-steps-nav__item-label">{step.label}</MKStepsNavItemLabelStyled>
              {step.description && (
                <MKStepsNavItemDescriptionStyled className="mk-steps-nav__item-description">
                  {step.description}
                </MKStepsNavItemDescriptionStyled>
              )}
            </MKStepsNavItemContentStyled>
          </MKStepsNavItemContainerStyled>
        </MKStepsNavItemStyled>
      ))}
    </MKStepsNavStyled>
  );
};
