import React from 'react'
// Components
import { CaptionPage, ContainerChart } from '../../component'
// Recharts
import { BARPAGE } from '../../reCharts'
// Data
import { data } from "./data"
const BarChartPage = () => {
    return (
        <div className='BarChartPage'>
            <CaptionPage caption={"bar chart"} desc={"the minimum wage in germany, france and spain (EUR/month)"} />
            <ContainerChart>
                <BARPAGE data={data} />
            </ContainerChart>
        </div>
    )
}

export default BarChartPage