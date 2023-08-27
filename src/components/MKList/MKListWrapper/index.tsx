import { FC, ReactNode } from 'react';
import classNames from 'classnames';
import './style.scss';

export interface MKListWrapperProps<T = any> {
  data?: T[];
  children?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  bordered?: boolean;
  ordered?: boolean;
  className?: string;
  renderItem?: (data: T, index: number) => ReactNode;
}

const MKListWrapper: FC<MKListWrapperProps> = ({
  children,
  className,
  header,
  footer,
  ordered,
  bordered,
  renderItem,
  data,
}) => (
  <div className={classNames(['mk-list', className, { bordered }, { ordered }])}>
    {header && <div className="mk-list__header">{header}</div>}
    <ul className="mk-list__ul">
      {children}
      {renderItem && data?.map((item, index) => renderItem(item, index))}
    </ul>
    {footer && <div className="mk-list__footer">{footer}</div>}
  </div>
);

export default MKListWrapper;
