import React from 'react'
// Components
import { CaptionPage, ContainerChart } from '../../component'
// Recharts
import { LINES } from '../../reCharts';
// Data
import { data } from "./data";
const LineChartPage = () => {
    return (
        <div className='LineChartPage'>
            <CaptionPage caption={"line chart"} desc={"simple line chart"} />
            <ContainerChart >
                <LINES data={data} />
            </ContainerChart>
        </div>
    )
}

export default LineChartPage