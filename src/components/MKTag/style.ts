import isPropValid from '@emotion/is-prop-valid';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { generateShapeStyles } from 'styles';
import { MKShapeTypes, MKSizeTypes, MKDesignTypes } from 'types';

export const MKTagStyled = styled('span', {
  shouldForwardProp: (prop) => isPropValid(prop),
})<{
  mkSize: MKSizeTypes;
  mkShape: MKShapeTypes;
  mkDesign: MKDesignTypes;
  mkStateless: boolean;
  mkDisabled: boolean;
  mkActive: boolean;
  mkBorderless: boolean;
  mkBlank: boolean;
}>`
  width: max-content;
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
  line-height: initial;
  font-size: var(--mk-font-size-scale-2);
  gap: var(--mk-space-scale-2);
  padding: var(--mk-space-scale-2);
  color: var(--color-neutral-light);

  ${({ mkBlank }) => {
    if (!mkBlank) {
      return css`
        color: var(--color-neutral-light);
      `;
    }

    return css`
      background-color: transparent;
    `;
  }}

  ${({ mkDesign, mkBlank }) => {
    switch (mkDesign) {
      case 'primary':
      case 'secondary':
      case 'tertiary':
        if (mkBlank) {
          return css`
            color: var(--color-brand-${mkDesign});
            border-color: var(--color-brand-${mkDesign});
          `;
        }
        return css`
          background-color: var(--color-brand-${mkDesign});
        `;
      case 'new':
      case 'success':
      case 'danger':
      case 'warning':
        if (mkBlank) {
          return css`
            color: var(--color-info-${mkDesign});
            border-color: var(--color-info-${mkDesign});
          `;
        }
        return css`
          background-color: var(--color-info-${mkDesign});
        `;
      case 'neutral':
        if (mkBlank) {
          return css`
            color: var(--color-neutral-med);
            border-color: var(--color-neutral-stroke);
          `;
        }

        return css`
          background-color: var(--color-neutral-cover);
        `;
    }
  }}

  ${({ mkSize }) => {
    switch (mkSize) {
      case 'xs':
        return css`
          font-size: var(--mk-font-size-scale-1);
        `;
      case 'sm':
        return css`
          font-size: var(--mk-font-size-scale-2);
        `;
      case 'md':
        return css`
          font-size: var(--mk-font-size-scale-3);
        `;
      case 'lg':
        return css`
          font-size: var(--mk-font-size-scale-4);
        `;
      case 'xl':
        return css`
          font-size: var(--mk-font-size-scale-5);
        `;
      case 'responsive':
        return css`
          font-size: inherit;
        `;
    }
  }}

  ${({ mkShape }) => generateShapeStyles(mkShape)}
  
  ${({ mkActive, mkDisabled }) => {
    if (mkActive && !mkDisabled) {
      return css`
        box-shadow: var(--mk-shadow-sm);
      `;
    }
  }}

  ${({ mkStateless, mkDisabled }) => {
    if (!mkStateless && !mkDisabled) {
      return css`
        cursor: pointer;

        &:hover {
          opacity: 0.9;
          box-shadow: var(--mk-shadow-sm);
        }

        &:focus,
        &:active {
          box-shadow: var(--mk-shadow-sm);
        }
      `;
    }

    if (!mkStateless && mkDisabled) {
      return css`
        cursor: not-allowed;
      `;
    }
  }}
    
    ${({ mkBorderless }) => {
    if (!mkBorderless) {
      return css`
        border-width: 1px;
        border-style: solid;
      `;
    }
  }}
    
    ${({ mkDisabled, mkBlank }) => {
    if (mkDisabled) {
      if (mkBlank) {
        return css`
          color: var(--color-disabled-dark);
          border: 1px solid var(--color-neutral-stroke);
        `;
      }

      return css`
        background-color: var(--color-disabled-light);
      `;
    }
  }}
`;

export const MKTagContentStyled = styled('span')`
  width: max-content;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: initial;
`;
