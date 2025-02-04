import { ReactNode } from 'react';

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { MK_CHARTS_COLORS } from 'definitions';
import { MKChartTooltipProps } from 'types';

type MKLineChartTickType = number | string;

interface MKLineChartDataItemProps {
  value: number;
  name: string;
  [key: string]: any;
}

export interface MKLineChartProps<T extends MKLineChartDataItemProps> {
  data: T[];
  width?: number;
  height?: number;
  xAxisTicks: MKLineChartTickType[];
  yAxisTicks: MKLineChartTickType[];
  dataKey?: string | number | ((obj: T) => T[keyof T]);
  yAxisLabel?: string;
  yAxisLabelFontWeight?: string;
  yAxisLabelFontSize?: string;
  interval: number;
  lines?: Record<string, string>;
  left?: number;
  right?: number;
  bottom?: number;
  labelAngle?: number;
  labelXCoordinate?: number;
  paddingBottom?: number;
  renderTooltip?: (props: MKChartTooltipProps) => ReactNode;
  renderLegend?: (value: string) => ReactNode;
  legendIconSize?: number;
}

export const MKLineChart = <T extends MKLineChartDataItemProps = any>({
  data,
  xAxisTicks,
  yAxisTicks,
  yAxisLabel,
  interval,
  lines = {},
  height = 500,
  left = 30,
  right = 40,
  bottom = 20,
  dataKey = 'value',
  labelAngle = -90,
  labelXCoordinate = -40,
  paddingBottom = 20,
  yAxisLabelFontWeight = 'bold',
  yAxisLabelFontSize = '0.875rem',
  renderTooltip,
  renderLegend,
  legendIconSize = 20,
  ...props
}: MKLineChartProps<T>) => {
  const colorValues = Object.values(MK_CHARTS_COLORS.line);

  return (
    <ResponsiveContainer width="100%" height={height} className="mq-line-chart">
      <LineChart data={data} margin={{ left, right, bottom }} {...props}>
        <XAxis
          type="number"
          dataKey={dataKey}
          domain={[xAxisTicks[0], xAxisTicks[xAxisTicks.length - 1]]}
          ticks={xAxisTicks}
          tick={true}
          interval={interval - 1}
          stroke={MK_CHARTS_COLORS.stroke.BARS}
        />
        <YAxis
          ticks={yAxisTicks}
          domain={[yAxisTicks[0], yAxisTicks[yAxisTicks.length - 1]]}
          label={{
            value: yAxisLabel,
            angle: labelAngle,
            fontWeight: yAxisLabelFontWeight,
            fontSize: yAxisLabelFontSize,
            dx: labelXCoordinate,
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
          wrapperStyle={{
            paddingBottom,
          }}
          verticalAlign="top"
          iconType="plainline"
          iconSize={legendIconSize}
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
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
