import { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'context';
import { MKThemeVariants } from 'types';

import { MKLayoutBanner } from '../MKLayoutBanner';
import { MKLayoutBody } from '../MKLayoutBody';
import { MKLayoutContent } from '../MKLayoutContent';
import { MKLayoutFooter } from '../MKLayoutFooter';
import { MKLayoutHeader } from '../MKLayoutHeader';
import { MKLayoutSidebar } from '../MKLayoutSidebar';

import { MKLayoutContainerStyled, MKLayoutInnerStyled, MKLayoutStyled, MKLayoutWrapperStyled } from './style';

type MKLayoutWrapperProps = {
  children?: ReactNode;
  sidebar?: ReactNode;
  header?: ReactNode;
  banner?: ReactNode;
  footer?: ReactNode;
  brand?: ReactNode;
  className?: string;
  theme?: MKThemeVariants;
  variant?: 'sticky-header' | 'sticky-sidebar';
  expanded?: boolean;
};

export const MKLayoutWrapper: FC<MKLayoutWrapperProps> = ({
  children,
  header,
  footer,
  sidebar,
  banner,
  brand,
  variant = 'sticky-header',
  className = '',
  expanded = false,
  theme = 'primary',
}) => {
  const [localExpanded, setLocalExpanded] = useState(expanded);

  useEffect(() => {
    setLocalExpanded(expanded);
  }, [expanded]);

  const content = useMemo(() => {
    switch (variant) {
      case 'sticky-header': {
        return (
          <MKLayoutContext.Provider
            value={{
              header,
              footer,
              brand,
              sidebar,
              theme,
              expanded: localExpanded,
              setExpanded: (status) => {
                setLocalExpanded(status);
              },
            }}
          >
            {header && <MKLayoutHeader brand={brand}>{header}</MKLayoutHeader>}
            <MKLayoutWrapperStyled className="mk-layout-wrapper">
              {sidebar && <MKLayoutSidebar>{sidebar}</MKLayoutSidebar>}
              <MKLayoutContent>
                <MKLayoutContainerStyled className="mk-layout-container" centered={!header}>
                  <MKLayoutInnerStyled className="mk-layout-inner">
                    {banner && <MKLayoutBanner>{banner}</MKLayoutBanner>}
                    {children && <MKLayoutBody>{children}</MKLayoutBody>}
                    {footer && <MKLayoutFooter>{footer}</MKLayoutFooter>}
                  </MKLayoutInnerStyled>
                </MKLayoutContainerStyled>
              </MKLayoutContent>
            </MKLayoutWrapperStyled>
          </MKLayoutContext.Provider>
        );
      }
      case 'sticky-sidebar': {
        return (
          <MKLayoutContext.Provider
            value={{
              header,
              footer,
              brand,
              sidebar,
              theme,
              expanded: localExpanded,
              setExpanded: (status) => {
                setLocalExpanded(status);
              },
            }}
          >
            <MKLayoutWrapperStyled className="mk-layout-wrapper">
              {sidebar && <MKLayoutSidebar brand={brand}>{sidebar}</MKLayoutSidebar>}
              <MKLayoutContent>
                {header && <MKLayoutHeader>{header}</MKLayoutHeader>}
                <MKLayoutContainerStyled className="mk-layout-container" centered={!header}>
                  <MKLayoutInnerStyled className="mk-layout-inner">
                    {banner && <MKLayoutBanner>{banner}</MKLayoutBanner>}
                    {children && <MKLayoutBody>{children}</MKLayoutBody>}
                    {footer && <MKLayoutFooter>{footer}</MKLayoutFooter>}
                  </MKLayoutInnerStyled>
                </MKLayoutContainerStyled>
              </MKLayoutContent>
            </MKLayoutWrapperStyled>
          </MKLayoutContext.Provider>
        );
      }
    }
  }, [variant, header, footer, brand, sidebar, theme, localExpanded, banner, children]);

  return (
    <MKLayoutStyled
      className={classNames(['mk-layout', className, theme, variant, { expanded }])}
      theme={theme}
      centered={!header}
    >
      <MKLayoutContext.Provider
        value={{
          header,
          footer,
          brand,
          sidebar,
          theme,
          expanded: localExpanded,
          setExpanded: (status) => {
            setLocalExpanded(status);
          },
        }}
      >
        {content}
      </MKLayoutContext.Provider>
    </MKLayoutStyled>
  );
};
