import './style.scss';

import { FC, useCallback, useMemo } from 'react';

import classNames from 'classnames';

import { generatePaginationConfig } from 'helpers';
import { MKThemeVariants } from 'types';

import { MKPaginationEllipsis } from '../MKPaginationEllipsis';
import { MKPaginationFirst } from '../MKPaginationFirst';
import { MKPaginationItem } from '../MKPaginationItem';
import { MKPaginationLast } from '../MKPaginationLast';
import { MKPaginationNext } from '../MKPaginationNext';
import { MKPaginationPrev } from '../MKPaginationPrev';

export interface MKPaginationWrapperProps {
  className?: string;
  theme?: MKThemeVariants;
  size?: number;
  total?: number;
  current?: number;
  show?: number;
  disabled?: boolean;
  ellipses?: boolean;
  onChange: (page: number) => void;
}

export const MKPaginationWrapper: FC<MKPaginationWrapperProps> = ({
  className = '',
  ellipses = false,
  disabled = false,
  current = 0,
  total = 10,
  size = 1,
  show = 5,
  theme = 'primary',
  onChange,
}) => {
  const pagination = useMemo(() => generatePaginationConfig(total, current, size, show), [total, current, size, show]);

  const handlePaginate = useCallback(
    (value: number) => {
      if (value === pagination.current) return;
      onChange(value);
    },
    [pagination, onChange],
  );

  return (
    <div role="tablist" className={classNames('mk-pagination', className, theme, { disabled })}>
      {pagination.current > show && (
        <MKPaginationFirst
          disabled={disabled || pagination.current === pagination.first}
          onClick={() => handlePaginate(pagination.first)}
          className="mk-pagination__link"
        >
          {'<<'}
        </MKPaginationFirst>
      )}

      {pagination.current > pagination.first && (
        <MKPaginationPrev
          disabled={disabled || pagination.current === pagination.prev}
          onClick={() => handlePaginate(pagination.prev)}
          className="mk-pagination__link"
        >
          {'<'}
        </MKPaginationPrev>
      )}

      {pagination.start > pagination.first && ellipses && (
        <MKPaginationEllipsis className="mk-pagination__link" onClick={() => handlePaginate(pagination.first)} />
      )}

      {pagination.pages.map((pageNumber) => (
        <MKPaginationItem
          disabled={pageNumber !== pagination.current && disabled}
          active={pageNumber === pagination.current}
          onClick={() => handlePaginate(pageNumber)}
          key={pageNumber}
          className="mk-pagination__item"
        >
          {pageNumber}
        </MKPaginationItem>
      ))}

      {pagination.end < pagination.last && ellipses && (
        <MKPaginationEllipsis className="mk-pagination__link" onClick={() => handlePaginate(pagination.last)} />
      )}

      {pagination.current < pagination.last && (
        <MKPaginationNext
          disabled={disabled || pagination.current === pagination.next}
          onClick={() => handlePaginate(pagination.next)}
          className="mk-pagination__link"
        >
          {'>'}
        </MKPaginationNext>
      )}

      {pagination.current < pagination.last - show && (
        <MKPaginationLast
          disabled={disabled || pagination.current === pagination.last}
          onClick={() => handlePaginate(pagination.last)}
          className="mk-pagination__link"
        >
          {'>>'}
        </MKPaginationLast>
      )}
    </div>
  );
};
