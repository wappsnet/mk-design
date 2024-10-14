import { FC, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

import { clsx } from 'clsx';

import { MKMenuContext } from 'context';

import {
  MKMenuCollapseContentStyled,
  MKMenuCollapseStyled,
  MKMenuCollapseToggleLabelStyled,
  MKMenuCollapseToggleStyled,
} from './style';

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
  const { design } = useContext(MKMenuContext);

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
    <MKMenuCollapseStyled className={clsx('mk-menu-collapse', className, { collapsed: opened, truncate })}>
      <MKMenuCollapseToggleStyled
        className="mk-menu-collapse__toggle"
        onClick={() => handleToggle(!opened)}
        collapsed={opened}
        design={design}
      >
        {icon && <span className="mk-menu-collapse__toggle-icon">{icon}</span>}
        <MKMenuCollapseToggleLabelStyled className="mk-menu-collapse__toggle-label" truncate={truncate}>
          {label}
        </MKMenuCollapseToggleLabelStyled>
        {toggleIcon && <span className="mk-menu-collapse__toggle-caret">{toggleIcon}</span>}
      </MKMenuCollapseToggleStyled>
      <MKMenuCollapseContentStyled className="mk-menu-collapse__content" collapsed={opened}>
        {children}
      </MKMenuCollapseContentStyled>
    </MKMenuCollapseStyled>
  );
};
