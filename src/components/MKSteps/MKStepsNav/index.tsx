import './style.scss';

import { FC, useContext } from 'react';

import classNames from 'classnames';

import { MKStepsContext } from 'definitions';

export const MKStepsNav: FC = () => {
  const { steps = [], active, type, direction, variant, onChange } = useContext(MKStepsContext);
  const index = steps.findIndex((step) => step.name === active);

  return (
    <div className={classNames('mk-steps-nav', variant, type, direction)}>
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
            <div className="mk-steps-nav__item-icon">{step.icon}</div>
            <div className="mk-step-nav__item__content">
              <span className="mk-steps-nav__item-label">{step.label}</span>
              <span className="mk-steps-nav__item-description">{step.description}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
