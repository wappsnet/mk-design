import { ReactNode } from 'react';

import { Area, AreaChart, ResponsiveContainer, CartesianGrid, Tooltip, XAxis, YAxis, Brush } from 'recharts';

import { MK_CHARTS_COLORS } from 'definitions';
import { MKChartAxisType, MKChartTooltipProps } from 'types';

type CurveType = 'basis' | 'monotone';

interface MQAreaChartMarginProps {
  top?: number;
  left?: number;
}

interface MKAreaChartCartesianGridProps {
  vertical?: boolean;
  strokeDasharray?: string;
}

interface MKAreaChartAreaProps {
  dataKey: string;
  type?: CurveType;
  stroke?: string;
  fill?: string;
}

interface MKAreaChartBrushProps {
  dataKey: string;
  height?: number;
  stroke?: string;
  startIndex?: number;
  endIndex?: number;
}

interface MKAreaChartAxisProps {
  dataKey: string;
  type?: MKChartAxisType;
}

export interface MKAreaChartProps<T> {
  width?: number;
  height?: number;
  data?: T[];
  margin?: MQAreaChartMarginProps;
  tooltipCursor?: boolean;
  xAxis: MKAreaChartAxisProps;
  cartesianGrid?: MKAreaChartCartesianGridProps;
  areas: MKAreaChartAreaProps[];
  brush?: MKAreaChartBrushProps;
  tooltip?: (data: MKChartTooltipProps) => ReactNode;
  tickFormatter?: (tick: any) => string;
}

export const MKAreaChart = <T = unknown,>({
  data,
  width = 500,
  height = 250,
  tooltip,
  tooltipCursor = false,
  cartesianGrid,
  xAxis,
  areas,
  brush,
  tickFormatter,
  ...props
}: MKAreaChartProps<T>) => (
  <ResponsiveContainer width="100%" height={height}>
    <AreaChart width={width} height={height} data={data} {...props}>
      <CartesianGrid vertical={false} {...cartesianGrid} />
      <XAxis tickFormatter={(tick) => tickFormatter?.(tick) || tick} {...xAxis} />
      <YAxis />
      <Tooltip
        content={(payload) => {
          if (payload.active && payload) {
            return tooltip?.(payload);
          }
        }}
        cursor={tooltipCursor}
      />
      {areas.map((area, index) => (
        <Area
          key={area.dataKey}
          stroke={Object.values(MK_CHARTS_COLORS.fill)[index] ?? MK_CHARTS_COLORS.fill.AREA}
          fill={Object.values(MK_CHARTS_COLORS.fill)[index] ?? MK_CHARTS_COLORS.fill.AREA}
          strokeWidth={2}
          {...area}
        />
      ))}
      {brush && <Brush tickFormatter={(tick) => tickFormatter?.(tick) || tick} {...brush} />}
    </AreaChart>
  </ResponsiveContainer>
);
