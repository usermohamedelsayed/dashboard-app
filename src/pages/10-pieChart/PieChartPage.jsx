import React from 'react'
import { CaptionPage, ContainerChart } from '../../component'
import { PIE } from '../../reCharts'
import { data } from "./data";
const PieChartPage = () => {
    return (
        <div className='PieChartPage'>
            <CaptionPage caption={"pie chart"} desc={"simple pie chart"} />
            <ContainerChart >
                <PIE data={data} outerWidth={"90%"} />
            </ContainerChart>
        </div>
    )
}

export default PieChartPage