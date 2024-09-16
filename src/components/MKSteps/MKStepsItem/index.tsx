import './style.scss';

import { FC, ReactNode, useContext, useEffect } from 'react';

import { clsx } from 'clsx';

import { MKStepsContext } from 'context';

type MKStepsItemProps = {
  children?: ReactNode;
  description?: ReactNode;
  name: string;
  label: ReactNode;
  icon?: ReactNode;
};

export const MKStepsItem: FC<MKStepsItemProps> = ({ children, name, label, description, icon }) => {
  const { active, create } = useContext(MKStepsContext);

  useEffect(() => {
    create?.({
      icon,
      label,
      name,
      description,
      content: children,
    });
  }, [create, children, icon, label, description, name]);

  if (active === name && children) {
    return <div className={clsx('mk-steps-item', { active })}>{children}</div>;
  }

  return null;
};
