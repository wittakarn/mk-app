import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { PieDataSet } from 'interfaces/MarketShareSummarize';

interface Props {
    pieData: PieDataSet[]
}
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, name } = props;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${name}: ${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const MarketSharePieGraphComponent: React.FC<Props> = (props: Props) => {
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#F0FFFF'];

    return (
        <ResponsiveContainer>
            <PieChart>
                <Pie
                    dataKey="value"
                    data={props.pieData}
                    cx={200}
                    cy={120}
                    outerRadius={100}
                    fill="#8884d8"
                    labelLine={false}
                    label={renderCustomizedLabel}
                >
                    {
                        props.pieData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} />)
                    }
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}

export const MarketSharePieGraph = React.memo<Props>(MarketSharePieGraphComponent);
MarketSharePieGraph.displayName = 'MarketSharePieGraph';

