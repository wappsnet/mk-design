import { FC, useCallback, useMemo } from 'react';

import classNames from 'classnames';

import { MKPaginationContext } from 'context';
import { generatePaginationConfig } from 'helpers';
import { MKShapeTypes, MKThemeVariants } from 'types';

import { MKPaginationItem } from '../MKPaginationItem';
import { MKPaginationLink } from '../MKPaginationLink';

import { MKPaginationWrapperStyled } from './style';

export interface MKPaginationWrapperProps {
  className?: string;
  theme?: MKThemeVariants;
  shape?: MKShapeTypes;
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
  shape = 'round',
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
    <MKPaginationContext.Provider
      value={{
        theme,
        shape,
        current: pagination.current,
      }}
    >
      <MKPaginationWrapperStyled
        role="tablist"
        className={classNames('mk-pagination', className, theme, { disabled })}
        theme={theme}
        shape={shape}
        disabled={disabled}
      >
        {pagination.current > show && (
          <MKPaginationLink
            disabled={disabled || pagination.current === pagination.first}
            onClick={() => handlePaginate(pagination.first)}
          >
            {'<<'}
          </MKPaginationLink>
        )}

        {pagination.current > pagination.first && (
          <MKPaginationLink
            disabled={disabled || pagination.current === pagination.prev}
            onClick={() => handlePaginate(pagination.prev)}
          >
            {'<'}
          </MKPaginationLink>
        )}

        {pagination.start > pagination.first && ellipses && (
          <MKPaginationLink onClick={() => handlePaginate(pagination.first)}>{'•••'}</MKPaginationLink>
        )}

        {pagination.pages.map((pageNumber) => (
          <MKPaginationItem
            disabled={pageNumber !== pagination.current && disabled}
            active={pageNumber === pagination.current}
            onClick={() => handlePaginate(pageNumber)}
            key={pageNumber}
          >
            {pageNumber}
          </MKPaginationItem>
        ))}

        {pagination.end < pagination.last && ellipses && (
          <MKPaginationLink onClick={() => handlePaginate(pagination.last)}>{'•••'}</MKPaginationLink>
        )}

        {pagination.current < pagination.last && (
          <MKPaginationLink
            disabled={disabled || pagination.current === pagination.next}
            onClick={() => handlePaginate(pagination.next)}
          >
            {'>'}
          </MKPaginationLink>
        )}

        {pagination.current < pagination.last - show && (
          <MKPaginationLink
            disabled={disabled || pagination.current === pagination.last}
            onClick={() => handlePaginate(pagination.last)}
          >
            {'>>'}
          </MKPaginationLink>
        )}
      </MKPaginationWrapperStyled>
    </MKPaginationContext.Provider>
  );
};
