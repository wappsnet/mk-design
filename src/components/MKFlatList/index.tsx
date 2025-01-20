import { ReactNode, useMemo } from 'react';

import { keyGen } from 'helpers';

import { MKFlatListBodyStyled, MKFlatListEmptyStyled, MKFlatListStyled } from './style';

interface MKFlatItemProps<T> {
  loading: boolean;
  data: T | null;
  index: number;
  key: string;
}

export interface MKFlatListProps<T> {
  data: T[] | null;
  loading?: boolean;
  maxRows?: number;
  empty?: ReactNode;
  renderRow: (item: MKFlatItemProps<T>) => ReactNode;
  renderBody?: (rows: ReactNode) => ReactNode;
}

export const MKFlatList = <T = unknown,>({
  maxRows = 10,
  renderRow,
  renderBody,
  data,
  loading = false,
  empty,
}: MKFlatListProps<T>) => {
  const list = useMemo(() => {
    const rows = data ?? [];

    const count = data?.length ? 0 : Math.max(maxRows - rows.length, 0);
    const items = keyGen(rows.concat(new Array(count).fill(null)));
    return items.map(({ item, key }, index) =>
      renderRow({
        data: item,
        index,
        key: String(key),
        loading: data === null || loading,
      }),
    );
  }, [data, loading, maxRows, renderRow]);

  const body = useMemo(() => {
    if (renderBody) {
      return renderBody(list);
    }

    return list;
  }, [list, renderBody]);

  return (
    <MKFlatListStyled className="mk-flat-list">
      {!loading && !!data && !data?.length ? (
        <MKFlatListEmptyStyled className="mk-flat-list__empty">{empty}</MKFlatListEmptyStyled>
      ) : (
        <MKFlatListBodyStyled className="mk-flat-list__body">{body}</MKFlatListBodyStyled>
      )}
    </MKFlatListStyled>
  );
};

export default MKFlatList;
