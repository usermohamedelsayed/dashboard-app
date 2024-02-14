import React from 'react'
import "./PieChartBox.scss"
import { PIE } from '../../reCharts'

const PieChartBox = ({ data, outerWidth }) => {
    return (
        <div className='PieChartBox'>
            <p className="titleBoxChart">leads by source</p>
            <div className="PieChart">
                <PIE data={data} outerWidth={outerWidth} />
            </div>
            <div className="pieChartDetails">
                {
                    data.map(item => (
                        <div key={item.name} className="item">
                            <div>
                                <span className='dot' style={{ background: item.color }}></span>
                                <div className="name">{item.name}</div>
                            </div>
                            <p className="value">{item.value}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PieChartBox