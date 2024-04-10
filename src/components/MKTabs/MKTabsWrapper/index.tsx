import './style.scss';

import { Children, FC, isValidElement, ReactNode, useEffect, useMemo, useState } from 'react';

import classNames from 'classnames';

import { MKTabsContext } from 'context';
import { MKStyleVariants } from 'types';

import { MKTabsItem } from '../MKTabsItem';

type MKTabsWrapperProps = {
  shape?: 'tabs' | 'pills';
  orientation?: 'vertical' | 'horizontal';
  design?: MKStyleVariants;
  bordered?: boolean;
  highlighted?: boolean;
  className?: string;
  children?: ReactNode;
  defaultActive: string;
  onChange?: (tab: string) => void;
};

export const MKTabsWrapper: FC<MKTabsWrapperProps> = ({
  children,
  defaultActive = '',
  orientation = 'horizontal',
  design = 'primary',
  shape = 'tabs',
  className = '',
  bordered = false,
  highlighted = false,
  onChange,
}) => {
  const [active, setActive] = useState(defaultActive);

  useEffect(() => {
    setActive(defaultActive);
  }, [defaultActive]);

  const onClickTab = (tab: string) => {
    setActive(tab);
    onChange?.(String(tab));
  };

  const content = useMemo(() => {
    const key = 0;
    return Children.map(children, (child) => {
      if (isValidElement(child) && child.type === MKTabsItem) {
        const { children: item, name } = child.props;
        const isActive = active === name;
        if (isActive) {
          return (
            <div aria-hidden={!isActive} key={key} className={classNames('mk-tabs__item', { active: isActive })}>
              {item}
            </div>
          );
        }
      }

      return null;
    });
  }, [active, children]);

  return (
    <MKTabsContext.Provider
      value={{
        setActive: onClickTab,
        active,
      }}
    >
      <div className={classNames(['mk-tabs', className, design, shape, orientation, { bordered, highlighted }])}>
        <ul className="mk-tabs__nav">{children}</ul>
        <div className="mk-tabs__content">{content}</div>
      </div>
    </MKTabsContext.Provider>
  );
};
