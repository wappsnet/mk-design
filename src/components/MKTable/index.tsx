import './style.scss';

import { FC, HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

export interface MKTableColumnsProps {
  name: string;
  label?: ReactNode;
  icon?: ReactNode;
  onSort?: (key: string) => void;
  onSelect?: (key: string) => void;
  selected?: boolean;
  sorted?: 'asc' | 'desc';
  disabled?: boolean;
  render: (data: any, index?: number) => ReactNode;
}

export interface MKTableProps extends HTMLAttributes<HTMLTableElement> {
  columns?: MKTableColumnsProps[];
  data: Record<MKTableColumnsProps['name'], any>[];
  borderless?: boolean;
  divided?: boolean;
  stretched?: boolean;
  striped?: boolean;
  loading?: boolean;
  responsive?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
}

export const MKTable: FC<MKTableProps> = ({
  columns,
  data,
  children,
  borderless = false,
  striped = false,
  stretched = false,
  loading = false,
  divided = false,
  responsive = true,
  header,
  footer,
}) => (
  <div
    className={classNames([
      'mk-table',
      { borderless },
      { responsive },
      { striped },
      { stretched },
      { divided },
      { loading },
    ])}
  >
    {header && <div className="mk-table__header">{header}</div>}
    <table className="mk-table__body">
      {columns?.map((col) => (
        <col key={col.name} className={classNames('mk-table__group', { sortable: !!col.onSort })} />
      ))}
      {columns?.length && (
        <thead>
          <tr>
            {columns.map((item) => (
              <th
                key={item.name}
                className={classNames([item.sorted, { sortable: !!item.onSort }, { selected: item.selected }])}
                onClick={() => {
                  item.onSort?.(item.name);
                }}
              >
                <div className="mk-table__heading">
                  {item.label}
                  {item.icon}
                </div>
              </th>
            ))}
          </tr>
        </thead>
      )}
      {data?.length && (
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={classNames([{ selectable: columns?.some((col) => !!col?.onSelect) }])}>
              {columns?.map((col) => (
                <td key={`${col.name}.${index}`}>{col.render?.(item[col.name], index) || item[col.name]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
      {children}
    </table>
    {footer && <div className="mk-table__footer">{footer}</div>}
  </div>
);
