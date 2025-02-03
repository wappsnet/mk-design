import { FC, ReactNode, useMemo } from 'react';

import { Cell, Label, Pie, PieChart, ResponsiveContainer } from 'recharts';

import { MK_CHARTS_COLORS } from 'definitions';

interface MKPieChartLabelProps {
  label: Record<string, string>;
  percent: number;
  height: number;
  x: number;
  y: number;
  textAnchor: string;
  startAngle: number;
  endAngle: number;
}

export interface MKPieChartProps {
  data?: any[];
  width?: number;
  height?: number;
  renderTooltip: (props: MKPieChartLabelProps) => ReactNode;
  labelText?: string | string[];
  totalValue?: number;
  labelSize?: number;
  startAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  labelWidth?: number;
}

export const MKPieChart: FC<MKPieChartProps> = ({
  data,
  labelSize = 20,
  width = 800,
  height = 300,
  labelText,
  renderTooltip,
  totalValue,
  startAngle = -270,
  innerRadius = 70,
  outerRadius = 90,
  labelWidth = 100,
}) => {
  const colorValues = Object.values(MK_CHARTS_COLORS.line);

  const chartData = useMemo(() => {
    let key = 0;

    return data?.map((item) => ({
      item,
      key: ++key,
    }));
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height={height} className="mq-pie-chart">
      <PieChart width={width} height={height}>
        <Pie
          data={data}
          startAngle={startAngle}
          cx="50%"
          cy="50%"
          label={(props) => renderTooltip({ ...props, height: labelSize })}
          legendType="square"
          isAnimationActive={false}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          fill={MK_CHARTS_COLORS.fill.PIE}
          dataKey="value"
        >
          {chartData?.map(({ key }, index) => <Cell key={key} fill={colorValues[index % colorValues.length]} />)}
          <Label width={labelWidth} position="center" className="mq-pie-chart__value">
            {`${totalValue} ${labelText}`}
          </Label>
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
