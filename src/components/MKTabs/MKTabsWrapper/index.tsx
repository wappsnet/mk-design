import { Children, FC, isValidElement, ReactNode, useEffect, useMemo, useState } from 'react';

import { clsx } from 'clsx';

import { MKTabsContext } from 'context';
import { MKDesignTypes, MKJustifyTypes, MKTabShapeTypes } from 'types';

import { MKTabsItem } from '../MKTabsItem';

import { MKTabsContentStyled, MKTabsItemContentStyled, MKTabsNavStyled, MKTabsStyled } from './style';

type MKTabsWrapperProps = {
  shape?: MKTabShapeTypes;
  justify: MKJustifyTypes;
  design?: MKDesignTypes;
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
  design = 'primary',
  shape = 'tab',
  justify = 'start',
  className = '',
  onChange,
  bordered = true,
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
            <MKTabsItemContentStyled aria-hidden={!isActive} mkActive={isActive} key={key} className="mk-tabs__item">
              {item}
            </MKTabsItemContentStyled>
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
        shape,
        design,
        justify,
        bordered,
      }}
    >
      <MKTabsStyled className={clsx(['mk-tabs', className])}>
        <MKTabsNavStyled
          className="mk-tabs__nav"
          mkJustify={justify}
          mkShape={shape}
          mkDesign={design}
          mkBordered={bordered}
        >
          {children}
        </MKTabsNavStyled>
        <MKTabsContentStyled className="mk-tabs__content" mkJustify={justify} mkBordered={bordered}>
          {content}
        </MKTabsContentStyled>
      </MKTabsStyled>
    </MKTabsContext.Provider>
  );
};
