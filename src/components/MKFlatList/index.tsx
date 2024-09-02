import { ReactNode, useMemo } from 'react';

import { MKFlatListBodyStyled, MKFlatListEmptyStyled, MKFlatListStyled } from './style';

interface MKFlatItemProps<T> {
  loading: boolean;
  data: T | null;
  index: number;
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
    return rows.concat(new Array(count).fill(null)).map((item, index) =>
      renderRow({
        data: item,
        index,
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
