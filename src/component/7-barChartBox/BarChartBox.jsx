import React from 'react'
import "./BarChartBox.scss"
import { BAR } from '../../reCharts'
const BarChartBox = ({ data, title }) => {
    return (
        <div className='BarChartBox'>
            <p className="titleBoxChart">{title}</p>
            <div className="bar">
                <BAR data={data} />
            </div>
        </div>
    )
}

export default BarChartBox