import { HTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import { keyGen } from 'helpers';
import { MKSizeTypes, MKTableAlignTypes, MKTableJustifyTypes, MKTableLayoutTypes, MKDesignTypes } from 'types';

import {
  MKTableEmptyStyled,
  MKTableFooterStyled,
  MKTableHeaderStyled,
  MKTableHeadingStyled,
  MKTableStyled,
  MKTableThStyled,
  MKTableTrStyled,
} from './style';

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
  align?: MKTableAlignTypes;
  justify?: MKTableJustifyTypes;
  layout?: MKTableLayoutTypes;
  design?: MKDesignTypes;
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
  <MKTableStyled
    className={clsx([
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
    borderless={borderless}
    responsive={responsive}
    striped={striped}
    stretched={stretched}
    divided={divided}
    loading={loading}
    inline={inline}
    design={design}
    justify={justify}
    align={align}
    layout={layout}
  >
    {header && <MKTableHeaderStyled className="mk-table__header">{header}</MKTableHeaderStyled>}

    {data && !data.length && !!empty ? (
      <MKTableEmptyStyled className="mk-table__empty">{empty}</MKTableEmptyStyled>
    ) : (
      <table>
        {!!columns?.length && (
          <thead>
            <MKTableTrStyled selectable={false}>
              {columns.map((item) => {
                const breakpoints = item.media ?? media ?? [];
                const classList = breakpoints.filter((query) => query.show).map((query) => `cell-${query.size}`);
                return (
                  <MKTableThStyled
                    key={item.name}
                    className={clsx([
                      'mk-table__th',
                      item.sorted,
                      { sortable: !!item.onSort, selected: item.selected },
                      ...classList,
                    ])}
                    onClick={() => {
                      item.onSort?.(item.name);
                    }}
                    sortable={!!item.onSort}
                    selected={!!item.selected}
                  >
                    <MKTableHeadingStyled className="mk-table__heading" justify={justify}>
                      {item.label}
                      {item.icon}
                    </MKTableHeadingStyled>
                  </MKTableThStyled>
                );
              })}
            </MKTableTrStyled>
          </thead>
        )}
        {!!data?.length && (
          <tbody>
            {keyGen(data).map(({ item, key }, index) => {
              const selectable = columns?.some((col) => !!col?.onSelect);
              return (
                <MKTableTrStyled
                  key={key}
                  className={clsx({
                    selectable,
                  })}
                  selectable={!!selectable}
                >
                  {columns?.map((col) => {
                    const breakpoints = col.media ?? media ?? [];
                    const classList = breakpoints.filter((query) => query.show).map((query) => `cell-${query.size}`);

                    return (
                      <td key={`${col.name}.${key}`} className={clsx(['mk-table__td', ...classList])}>
                        {col.render?.({
                          data: item,
                          name: col.name,
                          index,
                          loading,
                        })}
                      </td>
                    );
                  })}
                </MKTableTrStyled>
              );
            })}
          </tbody>
        )}
        {children}
      </table>
    )}
    {footer && <MKTableFooterStyled className="mk-table__footer">{footer}</MKTableFooterStyled>}
  </MKTableStyled>
);
