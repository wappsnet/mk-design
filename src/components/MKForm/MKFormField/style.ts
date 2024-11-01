import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const MKFormFieldStyled = styled('div')<{
  withPrepend: boolean;
  withAppend: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: var(--mk-border-radius-sm);

  ${({ withPrepend, withAppend }) => {
    if (withPrepend && withAppend) {
      return css`
        border: 1px solid var(--color-neutral-stroke);
        background-color: var(--color-neutral-cover);
      `;
    }
  }}
`;

export const MKFormFiledInputStyled = styled('label')<{
  withPrepend: boolean;
  withAppend: boolean;
  withPrefix: boolean;
  withPostfix: boolean;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  ${({ withPrepend, withAppend }) => {
    if (withPrepend && withAppend) {
      return css`
        margin: -1px 0;
      `;
    }
  }}

  ${({ withPrefix }) => {
    if (withPrefix) {
      return css`
        input,
        select,
        textarea {
          padding-left: 2rem;
        }
      `;
    }
  }}
  
  ${({ withPostfix }) => {
    if (withPostfix) {
      return css`
        input,
        select,
        textarea {
          padding-right: 2rem;
        }
      `;
    }
  }}
`;

export const MKFormFieldPrependStyled = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  padding: var(--mk-space-scale-2);
`;

export const MKFormFieldAppendStyled = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  padding: var(--mk-space-scale-2);
`;

export const MKFormFieldOverlayStyled = styled('div')<{
  mkPosition: 'start' | 'end';
}>`
  height: 100%;
  max-width: 2rem;
  aspect-ratio: 1;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ mkPosition }) => {
    if (mkPosition === 'start') {
      return css`
        left: 0;
      `;
    } else if (mkPosition === 'end') {
      return css`
        right: 0;
      `;
    }
  }}
`;
