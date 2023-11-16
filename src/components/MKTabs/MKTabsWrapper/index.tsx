import './style.scss';

import { Children, FC, isValidElement, ReactNode, useContext, useMemo, useState } from 'react';

import classNames from 'classnames';

import { MKTabsContext } from 'definitions';
import { MKStyleVariants } from 'types';

type MKTabsWrapperProps = {
  shape?: 'tabs' | 'pills' | 'vertical';
  variant?: MKStyleVariants;
  className?: string;
  children?: ReactNode;
  defaultActive: string;
};

export const MKTabsWrapper: FC<MKTabsWrapperProps> = ({
  children,
  defaultActive,
  variant = 'primary',
  shape = 'tabs',
  className = '',
}) => {
  const data = useContext(MKTabsContext);
  const [active, setActive] = useState(data.active || defaultActive);
  const [items, setItems] = useState(data.items);

  const childes = useMemo(() => {
    const parsed = Children.toArray(children);
    const index = parsed.findIndex((item) => isValidElement(item) && item.props.name);

    return {
      before: parsed.slice(0, index + 1),
      after: parsed.slice(index - 1),
    };
  }, [children]);

  return (
    <MKTabsContext.Provider
      value={{
        items,
        active: active || defaultActive,
        setActive: (key: string) => {
          setActive(key);
        },
        addItem: (data) => {
          setItems((prev) => ({
            ...prev,
            [data.name]: data,
          }));
        },
      }}
    >
      <div className={classNames(['mk-tabs', className, variant, shape])}>
        <ul className="mk-tabs__nav">
          {Object.values(items).map((item) => (
            <li
              key={item.name}
              className={classNames(['mk-tabs__nav-item', { active: active === item.name }])}
              role="tab"
              tabIndex={1}
              onClick={() => {
                setActive(item.name);
              }}
              onKeyUp={() => {
                setActive(item.name);
              }}
            >
              {item.icon?.position === 'start' && <span className="mk-tabs__nav-icon">{item.icon.node}</span>}
              {item.label}
              {item.icon?.position === 'end' && <span className="mk-tabs__nav-icon">{item.icon.node}</span>}
            </li>
          ))}
        </ul>
        {childes.before}
        {active && items[active] && <div className="mk-tabs-content">{items[active].children}</div>}
        {childes.after}
      </div>
    </MKTabsContext.Provider>
  );
};
