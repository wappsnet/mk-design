import { ReactNode, useMemo } from 'react';

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

export const MKFlatList = <T,>({
  maxRows = 10,
  renderRow,
  renderBody,
  data,
  loading = false,
  empty,
}: MKFlatListProps<T>) => {
  const list = useMemo(() => {
    const rows = data ? [...data] : [];

    const count = !!data?.length ? 0 : Math.max(maxRows - rows.length, 0);
    console.log(count, data?.length);
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

  console.log(list);

  return (
    <div className="mk-flat-list">
      {!loading && !!data && !data?.length ? (
        <div className="mk-flat-list__empty">{empty}</div>
      ) : (
        <div className="mk-flat-list__body">{body}</div>
      )}
    </div>
  );
};

export default MKFlatList;
