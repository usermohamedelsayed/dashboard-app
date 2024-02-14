import React from 'react'
import "./AreaChartBox.scss"
import { AREA } from '../../reCharts'
const AreaChartBox = ({ data }) => {
    return (
        <div className='AreaChartBox'>
            <p className="titleBoxChart">revenue analytics</p>
            <div className="areaChart">
                <AREA data={data} fontSize={12} />
            </div>
        </div>
    )
}

export default AreaChartBox