import React from 'react'
import "./CaptionPage.scss"
const CaptionPage = ({ caption, desc }) => {
    return (
        <div className='CaptionPage'>
            <div className="caption">{caption}</div>
            <div className="desc">{desc}</div>
        </div>
    )
}

export default CaptionPage