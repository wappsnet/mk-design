import { FC, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import { clsx } from 'clsx';

import { MKStepProps, MKStepsContext } from 'context';
import { MKDesignTypes, MKOrientationTypes } from 'types';

import { MKStepsItem } from '../MKStepsItem';

import { MKStepsFooterStyled, MKStepsHeaderStyled, MKStepsStyled, MKStepsWrapperStyled } from './style';

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
  orientation?: MKOrientationTypes;
  onChange?: (step: string) => void;
  className?: string;
};

export const MKStepsWrapper: FC<MKStepsWrapperProps> = ({
  items,
  header,
  footer,
  children,
  active,
  className = '',
  orientation = 'horizontal',
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

  const handleCreateSteps = useCallback(
    (step: MKStepProps) => {
      setSteps((prev) => {
        const exist = prev.find((item) => item.name === step.name);

        if (!exist) {
          return [...prev, step];
        }

        return prev;
      });
    },
    [setSteps],
  );

  const context = useMemo(
    () => ({
      steps,
      active,
      orientation,
      design,
      onChange,
      create: handleCreateSteps,
    }),
    [active, design, handleCreateSteps, onChange, orientation, steps],
  );

  return (
    <MKStepsStyled className={clsx('mk-steps', className)} mkOrientation={orientation}>
      <MKStepsContext.Provider value={context}>
        {header && <MKStepsHeaderStyled className="mk-steps__header">{header}</MKStepsHeaderStyled>}
        <MKStepsWrapperStyled className="mk-steps__wrapper">
          {items?.map((step) => (
            <MKStepsItem key={step.name} name={step.name} icon={step.icon} label={step.label}>
              {step.content}
            </MKStepsItem>
          ))}
          {children}
        </MKStepsWrapperStyled>
        {footer && <MKStepsFooterStyled className="mk-steps__footer">{footer}</MKStepsFooterStyled>}
      </MKStepsContext.Provider>
    </MKStepsStyled>
  );
};
