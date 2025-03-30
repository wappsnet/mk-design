import { FC, ReactNode } from 'react';

import { MK_AVATAR_SIZES_MAP } from 'definitions';
import { MKDesignTypes, MKShapeTypes } from 'types';

import { MKAvatar } from 'components/MKAvatar';

import {
  MKBadgeUserAvatarStyled,
  MKBadgeUserInfoEmailStyled,
  MKBadgeUserInfoNameStyled,
  MKBadgeUserInfoStyled,
  MKBadgeUserStyled,
} from './style';
import { MKBadgeUserVariantTypes } from './types';

export interface MKBadgeUserProps {
  avatar?: string;
  name?: string;
  email?: string;
  children?: ReactNode;
  url?: string;
  onNavigate?: () => void;
  shape?: MKShapeTypes;
  design?: MKDesignTypes;
  variant?: MKBadgeUserVariantTypes;
  size?: keyof typeof MK_AVATAR_SIZES_MAP;
  highlighted?: boolean;
  borderless?: boolean;
}

export const MKBadgeUser: FC<MKBadgeUserProps> = ({
  avatar,
  name,
  email,
  url,
  children,
  onNavigate,
  size = 'medium',
  shape = 'base',
  variant = 'flat',
  highlighted = false,
  borderless = false,
  design = 'primary',
}) => (
  <MKBadgeUserStyled
    className="mk-badge-user"
    mkVariant={variant}
    mkDesign={design}
    mkShape={shape}
    mkBorderless={borderless}
    mkHighlighted={highlighted}
  >
    <MKBadgeUserAvatarStyled
      className="mk-badge-user__avatar"
      href={url}
      onClick={(e) => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate();
        }
      }}
    >
      <MKAvatar.Image imageUrl={avatar} title={name} size={size} square={shape === 'square'} />
    </MKBadgeUserAvatarStyled>
    <MKBadgeUserInfoStyled className="mk-badge-user__info">
      <MKBadgeUserInfoNameStyled
        className="mk-badge-user__name"
        href={url}
        onClick={(e) => {
          if (onNavigate) {
            e.preventDefault();
            onNavigate();
          }
        }}
      >
        {name}
      </MKBadgeUserInfoNameStyled>

      {!!email && (
        <MKBadgeUserInfoEmailStyled href={`mailto:${email}`} className="mk-badge-user__email">
          {email}
        </MKBadgeUserInfoEmailStyled>
      )}
      {children}
    </MKBadgeUserInfoStyled>
  </MKBadgeUserStyled>
);
