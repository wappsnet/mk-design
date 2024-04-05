import './style.scss';

import { FC, ReactNode } from 'react';

import { MKTypo } from 'core/MKTypo';

import { MKGrid } from 'components/MKGrid';

interface MKColorItemProps {
  color: string;
  name: string;
  title?: ReactNode;
  subtitle?: ReactNode;
}

export interface MKColorsPaletteProps {
  header?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  colors?: MKColorItemProps[];
  renderItem?: (data: MKColorItemProps, index: number) => ReactNode;
}

export const MKColorsPalette: FC<MKColorsPaletteProps> = ({ header, footer, children, colors, renderItem }) => (
  <div className="mk-colors-palette">
    {!!header && (
      <div className="mk-colors-palette__header">
        <MKTypo.Text size="4x" bold>
          {header}
        </MKTypo.Text>
      </div>
    )}
    <div className="mk-colors-palette__wrapper">
      {children ||
        (!!colors && (
          <MKGrid.Row compact>
            {colors?.map((item, index) => (
              <MKGrid.Col key={item.name} lg="auto" compact>
                {renderItem?.(item, index)}
              </MKGrid.Col>
            ))}
          </MKGrid.Row>
        ))}
    </div>
    {!!footer && <div className="mk-colors-palette__footer">{footer}</div>}
  </div>
);
