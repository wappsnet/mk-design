import './style.scss';

import { FC, useContext, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKStepsContext } from 'context';

import { MKStepsNavItemStyled, MKStepsNavStyled } from './style';

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
          onClick={() => {
            onChange?.(step.name);
          }}
          mkActive={active === step.name}
          mkStateless={!onChange}
          mkFinished={i < index}
          mkInactive={i > index}
        >
          <div className="mk-steps-nav__item-container">
            <div className="mk-steps-nav__item-header">
              <div className="mk-steps-nav__item-icon">{step.icon}</div>
            </div>
            <div className="mk-step-nav__item-content">
              <span className="mk-steps-nav__item-label">{step.label}</span>
              <span className="mk-steps-nav__item-description">{step.description}</span>
            </div>
          </div>
        </MKStepsNavItemStyled>
      ))}
    </MKStepsNavStyled>
  );
};
