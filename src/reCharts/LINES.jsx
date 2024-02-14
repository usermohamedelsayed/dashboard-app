import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const LINES = ({ data }) => {
    return (
        <div className='LINES'>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        left: -20
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke='var(--cr-border)' />
                    <XAxis dataKey={"name"} stroke='var(--cr-main)' style={{ fontSize: "14px" }} />
                    <YAxis stroke='var(--cr-main)' style={{ fontSize: "14px" }} />
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
                    <Legend verticalAlign="top" height={56} />
                    <Line type="monotone" strokeWidth={3} dataKey="norway" stroke={"#E91E63"} activeDot={{ r: 8 }} />
                    <Line type="monotone" strokeWidth={3} dataKey="germany" stroke={"#2196F3"} />
                    <Line type="monotone" strokeWidth={3} dataKey="us" stroke={"#9C27B0"} />
                    <Line type="monotone" strokeWidth={3} dataKey="france" stroke={"#009688"} />
                    <Line type="monotone" strokeWidth={3} dataKey="japan" stroke={"#FFC107"} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default LINES 