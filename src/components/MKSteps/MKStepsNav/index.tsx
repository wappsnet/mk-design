import './style.scss';

import { FC, useContext, useMemo } from 'react';

import classNames from 'classnames';

import { MKStepsContext } from 'context';

export const MKStepsNav: FC = () => {
  const { steps = [], active, direction, design, onChange } = useContext(MKStepsContext);
  const index = useMemo(() => steps.findIndex((step) => step.name === active), [steps, active]);

  return (
    <div className={classNames('mk-steps-nav', design, direction)}>
      {steps.map((step, i) => (
        <div
          key={step.name}
          className={classNames(
            'mk-steps-nav__item',
            { active: active === step.name },
            { stateless: !onChange },
            { finished: i < index },
            { inactive: i > index },
          )}
          onClick={() => {
            onChange?.(step.name);
          }}
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
        </div>
      ))}
    </div>
  );
};
