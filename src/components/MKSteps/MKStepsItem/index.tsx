import { FC, ReactNode, useContext, useEffect } from 'react';
import classNames from 'classnames';

import { MKStepsContext } from 'definitions';
import './style.scss';

type MKStepsItemProps = {
  children?: ReactNode;
  description?: ReactNode;
  name: string;
  label: ReactNode;
  icon?: ReactNode;
};

const MKStepsItem: FC<MKStepsItemProps> = ({ children, name, label, description, icon }) => {
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
    return <div className={classNames('mk-steps-item', { active })}>{children}</div>;
  }

  return null;
};

export default MKStepsItem;
