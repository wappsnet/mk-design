import './style.scss';

import { FC, ReactNode, useEffect, useState } from 'react';

import { clsx } from 'clsx';

import { MKStepsContext } from 'context';
import { MKDesignTypes } from 'types';

import { MKStepsItem } from '../MKStepsItem';

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
  design?: MKDesignTypes;
  direction?: 'horizontal' | 'vertical';
  onChange?: (step: string) => void;
};

export const MKStepsWrapper: FC<MKStepsWrapperProps> = ({
  items,
  header,
  footer,
  children,
  active,
  direction = 'horizontal',
  design = 'primary',
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
    <div className={clsx('mk-steps', direction)}>
      <MKStepsContext.Provider
        value={{
          steps,
          active,
          direction,
          design,
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
