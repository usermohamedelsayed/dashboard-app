import React from 'react'
import "./globalCharts.scss"
import { BarChart, Bar, ResponsiveContainer, Tooltip } from 'recharts';


const BAR = ({ data }) => {
    return (
        <div className='BAR'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={150} height={40} data={data.list}>
                    <Bar dataKey={data.dataKey} fill={data.color} />
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
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BAR