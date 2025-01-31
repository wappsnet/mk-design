import { HTMLAttributes, ReactNode } from 'react';

import { clsx } from 'clsx';

import { keyGen } from 'helpers';
import { MKSizeTypes, MKTableAlignTypes, MKTableJustifyTypes, MKTableLayoutTypes, MKDesignTypes } from 'types';

import { MKPill } from 'core/MKPill';

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
  data: NonNullable<D>;
  name: keyof D;
  value: D[keyof D];
  index: number;
  loading?: boolean;
}

interface MKTableColumnMediaProps {
  size: MKSizeTypes;
  show: boolean;
}

export interface MKTableColumnProps<D> {
  name: keyof D;
  label?: ReactNode;
  icon?: ReactNode;
  width?: number | `${number}%`;
  media?: MKTableColumnMediaProps[];
  onSort?: (key: keyof D) => void;
  onSelect?: (key: keyof D) => void;
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
  skeleton?: boolean;
  align?: MKTableAlignTypes;
  justify?: MKTableJustifyTypes;
  layout?: MKTableLayoutTypes;
  design?: MKDesignTypes;
  header?: ReactNode;
  footer?: ReactNode;
  empty?: ReactNode;
  media?: MKTableColumnMediaProps[];
  className?: string;
}

export const MKTable = <D = unknown,>({
  columns,
  data,
  design = 'neutral',
  children,
  skeleton = false,
  inline = false,
  borderless = false,
  striped = false,
  stretched = false,
  loading = false,
  divided = false,
  responsive = false,
  className = '',
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
    className={clsx(['mk-table', className])}
    mkBorderless={borderless}
    mkResponsive={responsive}
    mkStriped={striped}
    mkStretched={stretched}
    mkDivided={divided}
    mkLoading={loading}
    mkInline={inline}
    mkDesign={design}
    mkJustify={justify}
    mkAlign={align}
    mkLayout={layout}
  >
    {header && <MKTableHeaderStyled className="mk-table__header">{header}</MKTableHeaderStyled>}

    {data && !data.length && !!empty ? (
      <MKTableEmptyStyled className="mk-table__empty">{empty}</MKTableEmptyStyled>
    ) : (
      <table>
        {!!columns?.length && (
          <thead>
            <MKTableTrStyled mkSelectable={false}>
              {columns.map((item) => {
                const breakpoints = item.media ?? media ?? [];
                const classList = breakpoints.filter((query) => query.show).map((query) => `cell-${query.size}`);
                return (
                  <MKTableThStyled
                    key={String(item.name)}
                    className={clsx(['mk-table__th', ...classList])}
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
                <MKTableTrStyled key={key} mkSelectable={!!selectable}>
                  {columns?.map((col) => {
                    const breakpoints = col.media ?? media ?? [];
                    const classList = breakpoints.filter((query) => query.show).map((query) => `cell-${query.size}`);

                    return (
                      <td key={`${String(col.name)}.${key}`} className={clsx(['mk-table__td', ...classList])}>
                        <MKPill key={String(col.name)} shape="square" height="5x" loading={loading && skeleton}>
                          {!!item &&
                            col.render?.({
                              data: item,
                              value: item[col.name],
                              name: col.name,
                              index,
                            })}
                        </MKPill>
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
