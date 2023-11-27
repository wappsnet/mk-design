import './style.scss';

import { FC, ReactNode, useCallback, useEffect, useState } from 'react';

import classNames from 'classnames';

type MKMenuCollapseProps = {
  collapsed?: boolean;
  onToggle?: (state: boolean) => void;
  label: ReactNode;
  icon?: ReactNode;
  toggleIcon?: ReactNode;
  children: ReactNode;
  className?: string;
  truncate?: boolean;
};

export const MKMenuCollapse: FC<MKMenuCollapseProps> = ({
  className = '',
  collapsed = false,
  onToggle,
  label,
  icon,
  children,
  toggleIcon,
  truncate = false,
}) => {
  const [opened, setOpened] = useState(collapsed);

  useEffect(() => {
    setOpened(collapsed);
  }, [collapsed]);

  const handleToggle = useCallback(
    (status: boolean) => {
      onToggle?.(status);
      setOpened(status);
    },
    [onToggle],
  );

  return (
    <div className={classNames('mk-menu-collapse', className, { collapsed: opened, truncate })}>
      <button className="mk-menu-collapse__toggle" onClick={() => handleToggle(!opened)}>
        {icon && <span className="mk-menu-collapse__toggle-icon">{icon}</span>}
        <span className="mk-menu-collapse__toggle-label">{label}</span>
        {toggleIcon && <span className="mk-menu-collapse__toggle-caret">{toggleIcon}</span>}
      </button>
      <div className="mk-menu-collapse__content">{children}</div>
    </div>
  );
};
