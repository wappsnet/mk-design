import { FC, ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';

import { MKStepsContext } from 'definitions';
import { MKStyleVariants } from 'types';

import { MKStepsItem } from '../MKStepsItem';
import './style.scss';

type MKStepsItemProps = {
  name: string;
  label: ReactNode;
  icon: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
};

type MKStepsWrapperProps = {
  items?: MKStepsItemProps[];
  active: string;
  children?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  variant?: MKStyleVariants;
  direction?: 'horizontal' | 'vertical';
  type?: 'navigation' | 'breadcrumb' | 'process';
  onChange?: (step: string) => void;
};

export const MKStepsWrapper: FC<MKStepsWrapperProps> = ({
  items,
  header,
  footer,
  children,
  active,
  direction = 'horizontal',
  type = 'process',
  variant = 'primary',
  onChange,
}) => {
  const [steps, setSteps] = useState(items || []);

  useEffect(() => {
    if (items?.length) {
      setSteps((prev) => {
        const drafts = items.filter((step) => !prev.find((item) => item.name === step.name));

        return [...prev, ...drafts];
      });
    }
  }, [setSteps, items]);

  return (
    <div className={classNames('mk-steps', direction, type)}>
      <MKStepsContext.Provider
        value={{
          steps,
          active,
          type,
          direction,
          variant,
          onChange,
          create: (step) => {
            setSteps((prev) => {
              const exist = prev.find((item) => item.name === step.name);

              if (!exist) {
                return [...prev, step];
              }

              return prev;
            });
          },
        }}
      >
        {header && <div className="mk-steps__header">{header}</div>}
        <div className="mk-steps__wrapper">
          {items?.map((step) => (
            <MKStepsItem key={step.name} name={step.name} icon={step.icon} label={step.label}>
              {step.content}
            </MKStepsItem>
          ))}
          {children}
        </div>
        {footer && <div className="mk-steps__footer">{footer}</div>}
      </MKStepsContext.Provider>
    </div>
  );
};
