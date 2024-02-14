import React from 'react'
import "./ContainerChart.scss"
const ContainerChart = ({ children }) => {
    return (
        <div className='ContainerChart'>
            {children}
        </div>
    )
}

export default ContainerChart