import './style.scss';

import { FC, ReactNode, useContext, useMemo } from 'react';

import classNames from 'classnames';

import { MKCollapseContext } from 'definitions';

export interface MKCollapseItemProps {
  children: ReactNode;
  header: ReactNode;
  extra?: ReactNode;
  className?: string;
  name: string;
  toggleIcon?: ReactNode;
  memo?: boolean;
  expand?: boolean;
}

export const MKCollapseItem: FC<MKCollapseItemProps> = ({
  children,
  expand = true,
  toggleIcon,
  className = '',
  name,
  header,
  extra,
}) => {
  const { collapsed, collapse } = useContext(MKCollapseContext);

  const active = useMemo(() => collapsed.includes(name), [collapsed, name]);

  return (
    <div className={classNames(['mk-collapse-item', className, { active }])}>
      <div
        className="mk-collapse-item__header"
        role="tab"
        tabIndex={0}
        onKeyDown={() => {
          collapse?.(name);
        }}
        onClick={() => {
          collapse?.(name);
        }}
      >
        <div className="mk-collapse-item__label">
          {expand && (
            <div className="mk-collapse-item__button">
              {toggleIcon || <span className="mk-collapse-item__toggle" />}
            </div>
          )}
          {header}
        </div>
        <div className="mk-collapse-item__extra">{extra}</div>
      </div>
      {active && <div className="mk-collapse-item__content">{children}</div>}
    </div>
  );
};
