import React from 'react';
import "./globalCharts.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
const AREA = ({ data, fontSize, statsLegend }) => {
    return (
        <div className='AREA'>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data.data}
                    margin={{
                        // top: 10,
                        // right: 0,
                        left: -15,
                        // bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke='var(--cr-border)' />
                    <XAxis dataKey="name" stroke='var(--cr-main)' fontSize={fontSize} />
                    <YAxis stroke='var(--cr-main)' fontSize={fontSize} />
                    <Tooltip
                        contentStyle={{ background: "var(--bg-submain)", border: "1px solid var(--cr-border)", color: "var(--cr-color)" }}
                        labelStyle={{
                            background: "var(--bg-main)",
                            padding: "5px 10px",
                            borderRadius: "3px",
                            border: "1px solid var(--cr-border)",
                            marginBottom: "5px"
                        }}
                        cursor={false}
                    />
                    {
                        statsLegend ? <Legend verticalAlign="top" height={36} /> : ""
                    }
                    <Area type="monotone" dataKey={data.dataKey[0]} stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey={data.dataKey[1]} stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey={data.dataKey[2]} stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default AREA