import { FC, ReactNode } from 'react';

import classNames from 'classnames';

import { MKListFooterStyled, MKListHeaderStyled, MKListStyled, MKListUlStyled } from './style';

export interface MKListWrapperProps<T = any> {
  data?: T[];
  children?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  bordered?: boolean;
  ordered?: boolean;
  striped?: boolean;
  dashed?: boolean;
  className?: string;
  renderItem?: (data: T, index: number) => ReactNode;
}

export const MKListWrapper: FC<MKListWrapperProps> = ({
  children,
  className,
  header,
  footer,
  ordered,
  bordered = false,
  striped = false,
  dashed = false,
  renderItem,
  data,
}) => (
  <MKListStyled
    className={classNames(['mk-list', className, { bordered, dashed, striped, ordered }])}
    bordered={bordered}
    dashed={dashed}
    striped={striped}
  >
    {header && <MKListHeaderStyled className="mk-list__header">{header}</MKListHeaderStyled>}
    <MKListUlStyled className="mk-list__ul">
      {children}
      {renderItem && data?.map((item, index) => renderItem(item, index))}
    </MKListUlStyled>
    {footer && <MKListFooterStyled className="mk-list__footer">{footer}</MKListFooterStyled>}
  </MKListStyled>
);
