import './style.scss';

import { FC, ReactNode, useEffect, useMemo, useState } from 'react';

import classNames from 'classnames';

import { MKLayoutContext } from 'definitions';
import { MKStyleVariants } from 'types';

import { MKLayoutBody } from '../MKLayoutBody';
import { MKLayoutContent } from '../MKLayoutContent';
import { MKLayoutFooter } from '../MKLayoutFooter';
import { MKLayoutHeader } from '../MKLayoutHeader';
import { MKLayoutSidebar } from '../MKLayoutSidebar';

type MKLayoutWrapperProps = {
  children?: ReactNode;
  sidebar?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  brand?: ReactNode;
  className?: string;
  design?: MKStyleVariants;
  variant?: 'sticky-header' | 'sticky-sidebar';
  expanded?: boolean;
};

export const MKLayoutWrapper: FC<MKLayoutWrapperProps> = ({
  children,
  header,
  footer,
  sidebar,
  brand,
  variant = 'sticky-sidebar',
  className = '',
  expanded = true,
  design = 'primary',
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
              design,
              expanded: localExpanded,
              setExpanded: (status) => {
                setLocalExpanded(status);
              },
            }}
          >
            {header && <MKLayoutHeader />}
            <div className="mk-layout-wrapper">
              {sidebar && <MKLayoutSidebar />}
              <MKLayoutContent>
                {children && <MKLayoutBody>{children}</MKLayoutBody>}
                {footer && <MKLayoutFooter />}
              </MKLayoutContent>
            </div>
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
              design,
              expanded: localExpanded,
              setExpanded: (status) => {
                setLocalExpanded(status);
              },
            }}
          >
            <div className="mk-layout-wrapper">
              {sidebar && <MKLayoutSidebar />}
              <MKLayoutContent>
                {header && <MKLayoutHeader />}
                {children && <MKLayoutBody>{children}</MKLayoutBody>}
                {footer && <MKLayoutFooter />}
              </MKLayoutContent>
            </div>
          </MKLayoutContext.Provider>
        );
      }
    }
  }, [variant, header, footer, brand, sidebar, design, localExpanded, children]);

  return (
    <section className={classNames(['mk-layout', className, design, variant, { expanded }])}>
      <MKLayoutContext.Provider
        value={{
          header,
          footer,
          brand,
          sidebar,
          design,
          expanded: localExpanded,
          setExpanded: (status) => {
            setLocalExpanded(status);
          },
        }}
      >
        {content}
      </MKLayoutContext.Provider>
    </section>
  );
};
