import React from 'react'
import "./Home.scss"

import {
    dataBox1,
    dataBox2,
    dataBox3,
    dataBox5,
    dataBox6,
    dataPie,
    dataArea,
    dataBarLeft,
    dataBarRight,
} from "./data"
import { AreaChartBox, PieChartBox, TopDeals, BarChartBox } from '../../component'
import { ChartBox } from '../../component'

const Home = () => {
    return (
        <div className='Home'>
            <div className="box box1"><TopDeals data={dataBox1} /></div>
            <div className="box box2"><ChartBox {...dataBox2} /></div>
            <div className="box box3"><ChartBox {...dataBox3} /></div>
            <div className="box box4"><PieChartBox data={dataPie} outerWidth={90} /></div>
            <div className="box box5"><ChartBox {...dataBox5} /></div>
            <div className="box box6"><ChartBox {...dataBox6} /></div>
            <div className="box box7"><AreaChartBox data={dataArea} /></div>
            <div className="box box8"><BarChartBox data={dataBarLeft} title={"total visit"} /></div>
            <div className="box box9"><BarChartBox data={dataBarRight} title={"profit earned"} /></div>
        </div>
    )
}

export default Home