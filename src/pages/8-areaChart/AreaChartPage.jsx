import React from 'react'
// Component
import { CaptionPage, ContainerChart } from '../../component'
// Recharts
import { AREA } from '../../reCharts'
// Data
import { data } from './data'
const AreaChartPage = () => {
    return (
        <div className='AreaChartPage'>
            <CaptionPage caption={"area chart"} desc={"simple area chart"} />
            <ContainerChart >
                <AREA data={data} statsLegend={true} />
            </ContainerChart>
        </div>
    )
}

export default AreaChartPage