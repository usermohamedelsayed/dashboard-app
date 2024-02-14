import React from 'react'
import "./globalCharts.scss"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};
const PIE = ({ data, outerWidth }) => {
    return (
        <div className='PIE'>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Tooltip />
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        label={renderCustomizedLabel}
                        outerRadius={outerWidth || 80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((item) => (
                            <Cell key={`cell-${item.id}`} fill={item.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PIE