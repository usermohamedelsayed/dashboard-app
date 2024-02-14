import React from 'react'
import { LineChart, Line, Tooltip, ResponsiveContainer } from 'recharts';

const TINYLINE = ({ dataKey, data, color }) => {
  return (
    <div className='TINYLINE'>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={300} height={100} data={data}>
          <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} />
          <Tooltip
            contentStyle={{ background: "transparent", border: "0", color: "red" }}
            labelStyle={{ display: "none" }}
            position={{ x: -30, y: 70 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TINYLINE