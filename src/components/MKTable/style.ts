import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { MKTableAlignTypes, MKTableJustifyTypes, MKTableLayoutTypes, MKDesignTypes } from 'types';

export const MKTableStyled = styled('div')<{
  mkBorderless: boolean;
  mkDivided: boolean;
  mkStretched: boolean;
  mkStriped: boolean;
  mkLoading: boolean;
  mkResponsive: boolean;
  mkInline: boolean;
  mkAlign: MKTableAlignTypes;
  mkJustify: MKTableJustifyTypes;
  mkLayout: MKTableLayoutTypes;
  mkDesign: MKDesignTypes;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;

  table {
    width: auto;
    min-width: 100%;
    table-layout: auto;
    border-collapse: collapse;

    caption {
      width: 100%;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      padding: var(--mk-space-scale-3);
    }
  }

  ${({ mkResponsive }) =>
    mkResponsive &&
    css`
      overflow-x: auto;
    `}

  th {
    ${({ mkDesign }) => {
      switch (mkDesign) {
        case 'primary':
        case 'secondary':
        case 'tertiary':
          return css`
            background-color: var(--color-brand-${mkDesign});
            color: var(--color-neutral-light);
          `;
        case 'new':
        case 'warning':
        case 'danger':
          return css`
            background-color: var(--color-brand-${mkDesign});
            color: var(--color-neutral-light);
          `;
        case 'neutral':
          return css`
            background-color: transparent;
          `;
      }
    }}
  }

  ${({ mkInline }) =>
    mkInline &&
    css`
      th,
      td {
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    `}

  ${({ mkBorderless }) =>
    !mkBorderless &&
    css`
      th,
      td {
        border: 1px solid rgba(0, 0, 0, 0.25);
      }
    `}
  
  ${({ mkDivided }) =>
    mkDivided &&
    css`
      th,
      td {
        border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      }
    `}

  ${({ mkStretched }) =>
    mkStretched &&
    css`
      th {
        &:not(:first-child) {
          width: 100%;
        }
      }
    `}

  ${({ mkStriped }) =>
    mkStriped &&
    css`
      tbody {
        tr {
          &:nth-child(even) {
            background-color: var(--color-neutral-cover);
          }

          &:nth-child(odd) {
            background-color: var(--color-neutral-light);
          }
        }
      }
    `}
  
  td {
    ${({ mkAlign }) => css`
      vertical-align: ${mkAlign};
    `}
  }

  th,
  td {
    padding: var(--mk-space-scale-2);

    ${({ mkJustify }) => css`
      text-align: ${mkJustify};
    `}

    ${({ mkLayout }) => {
      switch (mkLayout) {
        case 'horizontal-right':
          return css`
            &:first-child {
              text-align: right;
            }
          `;

        case 'horizontal-left':
          return css`
            &:first-child {
              text-align: start;
            }
          `;
        case 'vertical':
          return css`
            text-align: center;
          `;
      }
    }}
  }
`;

export const MKTableHeaderStyled = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MKTableFooterStyled = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MKTableEmptyStyled = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MKTableThStyled = styled('th')<{
  sortable: boolean;
  selected: boolean;
}>`
  vertical-align: bottom;
  text-align: left;
  font-size: var(--mk-font-size-scale-3);
  font-weight: bold;

  ${({ sortable }) =>
    sortable &&
    css`
      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }
    `}

  ${({ selected }) =>
    selected &&
    css`
      opacity: 0.6;
    `}
`;

export const MKTableTrStyled = styled('tr')<{
  selectable: boolean;
}>`
  ${({ selectable }) =>
    selectable &&
    css`
      cursor: pointer;

      &:hover {
        background-color: rgba(0, 0, 0, 0.025);
      }
    `}
`;

export const MKTableHeadingStyled = styled('div')<{
  justify: MKTableJustifyTypes;
}>`
  width: 100%;
  display: flex;
  align-items: center;

  ${({ justify }) => css`
    justify-content: ${justify};
  `}
`;
