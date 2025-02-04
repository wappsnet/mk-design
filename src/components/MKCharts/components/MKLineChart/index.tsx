import { ReactNode } from 'react';

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { MK_CHARTS_COLORS, MK_SIZES } from 'definitions';
import { MKChartTooltipProps } from 'types';

export interface MKLineChartDataItemProps {
  value: number;
  name: string;
  [key: string]: any;
}

export interface MKLineChartProps<T extends MKLineChartDataItemProps> {
  data: T[];
  width?: number;
  height?: number;
  dataKey?: string | number | ((obj: T) => T[keyof T]);
  yAxisLabel?: string;
  fontWeight?: 'bold' | 'normal';
  fontSize?: number;
  interval: number;
  lines?: Record<string, string>;
  left?: number;
  right?: number;
  bottom?: number;
  paddingBottom?: number;
  renderTooltip?: (props: MKChartTooltipProps) => ReactNode;
  renderLegend?: (value: string) => ReactNode;
  iconSize?: number;
}

export const MKLineChart = <T extends MKLineChartDataItemProps = any>({
  data,
  yAxisLabel,
  interval,
  lines = {},
  height = 500,
  left = 30,
  right = 40,
  bottom = 20,
  dataKey = 'value',
  fontWeight = 'bold',
  fontSize = MK_SIZES.breakPoints.sm.fontSize,
  renderTooltip,
  renderLegend,
  iconSize = 20,
  ...props
}: MKLineChartProps<T>) => {
  const colorValues = Object.values(MK_CHARTS_COLORS.line);

  return (
    <ResponsiveContainer width="100%" height={height} className="mq-line-chart">
      <LineChart data={data} margin={{ left, right, bottom }} {...props}>
        <XAxis type="number" dataKey={dataKey} interval={interval - 1} stroke={MK_CHARTS_COLORS.stroke.BARS} />
        <YAxis
          label={{
            value: yAxisLabel,
            fontWeight: fontWeight,
            fontSize: fontSize,
          }}
          stroke={MK_CHARTS_COLORS.stroke.BARS}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload) {
              return renderTooltip?.({ payload });
            }

            return null;
          }}
        />
        <Legend
          verticalAlign="top"
          iconType="plainline"
          iconSize={iconSize}
          align="center"
          formatter={(value) => renderLegend?.(value) || value}
        />
        {Object.keys(lines).map((key, index) => (
          <Line
            name={lines[key]}
            type="linear"
            key={key}
            dataKey={key}
            stroke={colorValues[index % colorValues.length]}
            strokeWidth="2"
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
