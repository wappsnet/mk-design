import { FC, ReactNode } from 'react';

import {
  MKListItemActionsStyled,
  MKListItemContentDescriptionStyled,
  MKListItemContentLabelStyled,
  MKListItemContentStyled,
  MKListItemEndStyled,
  MKListItemExtraStyled,
  MKListItemStartStyled,
  MKListItemStyled,
} from './style';

export interface MKListItemProps {
  children?: ReactNode;
  label?: ReactNode;
  description?: ReactNode;
  start?: ReactNode;
  end?: ReactNode;
  actions?: ReactNode[];
  extra?: ReactNode;
}

export const MKListItem: FC<MKListItemProps> = ({ children, start, end, extra, description, label, actions }) => (
  <MKListItemStyled className="mk-list-item">
    {start && <MKListItemStartStyled className="mk-list-item__start">{start}</MKListItemStartStyled>}
    <MKListItemContentStyled className="mk-list-item__content">
      {label && (
        <MKListItemContentLabelStyled className="mk-list-item__content-label">{label}</MKListItemContentLabelStyled>
      )}
      {description && (
        <MKListItemContentDescriptionStyled className="mk-list-item__content-description">
          {description}
        </MKListItemContentDescriptionStyled>
      )}
      {children && <div className="mk-list-item__content-child">{children}</div>}
    </MKListItemContentStyled>
    {extra && <MKListItemExtraStyled className="mk-list-item__extra">{extra}</MKListItemExtraStyled>}
    {actions?.length && <MKListItemActionsStyled className="mk-list-item__actions">{actions}</MKListItemActionsStyled>}
    {end && <MKListItemEndStyled className="mk-list-item__end">{end}</MKListItemEndStyled>}
  </MKListItemStyled>
);
