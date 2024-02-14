import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BARPAGE = ({ data }) => {
    return (
        <div className='BARPAGE'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        left: -20,
                    }}
                >
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
                    <CartesianGrid strokeDasharray="3 3" stroke='var(--cr-border)' />
                    <XAxis dataKey="year" stroke='var(--cr-main)' style={{ fontSize: "14px" }} />
                    <YAxis stroke='var(--cr-main)' style={{ fontSize: "14px" }} />
                    <Legend verticalAlign="top" height={36} />
                    <Bar dataKey="germany" fill="#8884d8" />
                    <Bar dataKey="france" fill="#82ca9d" />
                    <Bar dataKey="spain" fill="orange" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BARPAGE