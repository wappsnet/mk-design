import { FC, ReactNode, useContext, useMemo } from 'react';

import { clsx } from 'clsx';

import { MKCollapseContext } from 'context';

import {
  MKCollapseItemButtonStyled,
  MKCollapseItemContentStyled,
  MKCollapseItemExtraStyled,
  MKCollapseItemHeaderStyled,
  MKCollapseItemLabelStyled,
  MKCollapseItemStyled,
  MKCollapseItemToggleStyled,
} from './style';

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
  const { bordered, collapsed, collapse } = useContext(MKCollapseContext);

  const active = useMemo(() => collapsed.includes(name), [collapsed, name]);

  return (
    <MKCollapseItemStyled className={clsx(['mk-collapse-item', className])} mkBordered={bordered}>
      <MKCollapseItemHeaderStyled
        className="mk-collapse-item__header"
        role="tab"
        tabIndex={0}
        onKeyDown={() => {
          collapse?.(name);
        }}
        onClick={() => {
          collapse?.(name);
        }}
        mkBordered={bordered}
        mkActive={active}
      >
        <MKCollapseItemLabelStyled className="mk-collapse-item__label">
          {expand && (
            <MKCollapseItemButtonStyled className="mk-collapse-item__button" mkActive={active}>
              {toggleIcon || <MKCollapseItemToggleStyled className="mk-collapse-item__toggle" />}
            </MKCollapseItemButtonStyled>
          )}
          {header}
        </MKCollapseItemLabelStyled>
        <MKCollapseItemExtraStyled className="mk-collapse-item__extra">{extra}</MKCollapseItemExtraStyled>
      </MKCollapseItemHeaderStyled>
      {active && (
        <MKCollapseItemContentStyled className="mk-collapse-item__content" mkActive={active} role="tabpanel">
          {children}
        </MKCollapseItemContentStyled>
      )}
    </MKCollapseItemStyled>
  );
};
