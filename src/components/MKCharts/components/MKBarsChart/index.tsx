import { FC, ReactNode } from 'react';

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import { MK_CHARTS_COLORS } from 'definitions';

interface MKBarsChartTooltipPayloadProps {
  name: string;
  count: number;
  percent: number;
}

interface MQBarsChartValueProps {
  count: number;
  percent: number;
}

export interface MKBarsChartProps {
  values: MQBarsChartValueProps[];
  right?: number;
  height?: number;
  customizedTooltip?: (data: MKBarsChartTooltipPayloadProps) => ReactNode;
  barFontSize?: number;
  layout?: 'horizontal' | 'vertical' | 'centric' | 'radial';
}

export const MKBarsChart: FC<MKBarsChartProps> = ({
  values,
  height = 150,
  right = 50,
  customizedTooltip,
  barFontSize = 14,
  layout = 'vertical',
}) => (
  <ResponsiveContainer width="100%" height={height} className="mq-rating-bars">
    <BarChart height={height} data={values} layout={layout} margin={{ right }}>
      <XAxis type="number" hide />
      <YAxis
        type="category"
        dataKey="name"
        width={100}
        tickLine={false}
        allowDataOverflow={false}
        tick={{
          fontSize: barFontSize,
        }}
      />
      <Tooltip
        content={({ active, payload }) => {
          if (active && payload) {
            return customizedTooltip?.(payload[0].payload);
          }

          return null;
        }}
        cursor={{ fill: 'transparent' }}
      />
      <Bar
        dataKey="percent"
        fill={MK_CHARTS_COLORS.fill.BARS}
        stroke={MK_CHARTS_COLORS.stroke.BARS}
        label={(entry) => {
          const width = Number(entry?.width);
          const height = Number(entry?.height);
          const startX = Number(entry?.x);
          const startY = Number(entry?.y);

          const x = startX + width + barFontSize / 2;
          const y = startY + height - barFontSize / 2;
          return (
            <text x={x} y={y} fill={MK_CHARTS_COLORS.stroke.BARS} fontSize={barFontSize}>
              {entry.value || 0}%
            </text>
          );
        }}
        isAnimationActive={false}
      />
    </BarChart>
  </ResponsiveContainer>
);
