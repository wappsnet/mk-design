import './style.scss';

import { HTMLAttributes, ReactNode } from 'react';

import classNames from 'classnames';

import { keyGen } from 'helpers';
import { MKSizeTypes, MKStyleVariants } from 'types';

interface MKTableColumnRenderProps<D> {
  data: D;
  name: string;
  index: number;
  loading?: boolean;
}

interface MKTableColumnMediaProps {
  size: MKSizeTypes;
  show: boolean;
}

export interface MKTableColumnProps<D> {
  name: string;
  label?: ReactNode;
  icon?: ReactNode;
  width?: number | `${number}%`;
  media?: MKTableColumnMediaProps[];
  onSort?: (key: string) => void;
  onSelect?: (key: string) => void;
  selected?: boolean;
  sorted?: 'asc' | 'desc';
  disabled?: boolean;
  render: (data: MKTableColumnRenderProps<D>) => ReactNode;
}

export interface MKTableProps<D> extends HTMLAttributes<HTMLTableElement> {
  columns?: MKTableColumnProps<D>[];
  data: D[];
  borderless?: boolean;
  divided?: boolean;
  stretched?: boolean;
  striped?: boolean;
  loading?: boolean;
  responsive?: boolean;
  inline?: boolean;
  align?: 'top' | 'middle' | 'bottom';
  justify?: 'start' | 'center' | 'end';
  layout?: 'vertical' | 'horizontal-left' | 'horizontal-right';
  design?: MKStyleVariants;
  header?: ReactNode;
  footer?: ReactNode;
  empty?: ReactNode;
  media?: MKTableColumnMediaProps[];
}

export const MKTable = <D,>({
  columns,
  data,
  design = 'neutral',
  children,
  inline = false,
  borderless = false,
  striped = false,
  stretched = false,
  loading = false,
  divided = false,
  responsive = false,
  align = 'top',
  justify = 'start',
  layout = 'vertical',
  header,
  footer,
  empty,
  media = [
    {
      size: 'responsive',
      show: true,
    },
  ],
}: MKTableProps<D>) => (
  <div
    className={classNames([
      'mk-table',
      design,
      align,
      justify,
      layout,
      {
        borderless,
        responsive,
        striped,
        stretched,
        divided,
        loading,
        inline,
      },
    ])}
  >
    {header && <div className="mk-table__header">{header}</div>}

    {data && !data.length && !!empty ? (
      <div className="mk-table__empty">{empty}</div>
    ) : (
      <table>
        {!!columns?.length && (
          <thead>
            <tr>
              {columns.map((item) => {
                const breakpoints = (item.media || media)
                  .filter((query) => query.show)
                  .map((query) => `cell-${query.size}`);
                return (
                  <th
                    key={item.name}
                    className={classNames([
                      'mk-table__th',
                      item.sorted,
                      { sortable: !!item.onSort, selected: item.selected },
                      ...breakpoints,
                    ])}
                    onClick={() => {
                      item.onSort?.(item.name);
                    }}
                  >
                    <div className="mk-table__heading">
                      {item.label}
                      {item.icon}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
        )}
        {!!data?.length && (
          <tbody>
            {keyGen(data)?.map(({ item, key }, index) => (
              <tr key={key} className={classNames([{ selectable: columns?.some((col) => !!col?.onSelect) }])}>
                {columns?.map((col) => {
                  const breakpoints = (col.media || media)
                    .filter((query) => query.show)
                    .map((query) => `cell-${query.size}`);

                  return (
                    <td key={`${col.name}.${key}`} className={classNames(['mk-table__td', ...breakpoints])}>
                      {col.render?.({
                        data: item,
                        name: col.name,
                        index,
                        loading,
                      })}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        )}
        {children}
      </table>
    )}
    {footer && <div className="mk-table__footer">{footer}</div>}
  </div>
);
