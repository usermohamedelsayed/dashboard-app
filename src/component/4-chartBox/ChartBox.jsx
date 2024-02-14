import React from 'react'
import "./ChartBox.scss"
import { Link } from 'react-router-dom'
import { TINYLINE } from '../../reCharts'
const ChartBox = ({ color, icon, title, number, percentage, data, dataKey }) => {
    return (
        <div className='ChartBox'>
            <div className="detailsText">
                <div className="head">
                    <span className="icon" style={{ color: color }}>{icon}</span>
                    <div className="title">{title}</div>
                </div>
                <div className="number">{number}</div>
                <Link to="/" className='viewAll' style={{ color: color }}>view all</Link>
            </div>
            <div className="detailsChart">
                <div className="lineChart">
                    <TINYLINE color={color} data={data} dataKey={dataKey} />
                </div>
                <div className="percentage">
                    <span style={{ color: +percentage < 15 ? "red" : "#00ff0a" }}>{percentage}%</span>
                    <small>this month</small>
                </div>
            </div>
        </div>
    )
}

export default ChartBox