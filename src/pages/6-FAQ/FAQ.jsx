import React, { useEffect, useRef } from 'react'
import "./FAQ.scss"
// Icons
import { IoIosArrowDown, } from "react-icons/io";
// Component
import { CaptionPage } from '../../component'
// Data
import { data } from "./data"
const FAQ = () => {
    const refUl = useRef()
    useEffect(() => {
        let firstLi = refUl.current.querySelectorAll("li")[0]
        firstLi.style.height = firstLi.scrollHeight + "px"
    }, [])
    const handlerToggleAcoordion = (e) => {
        let li = e.target.parentElement
        if (!li.classList.contains("active")) {
            [...refUl.current.querySelectorAll("li")].map(li => li.style.height = "49px");
            [...refUl.current.querySelectorAll("li")].map(li => li.classList.remove("active"));
            li.style.height = li.scrollHeight + "px";
            li.classList.add("active")
        } else {
            li.style.height = "49px";
            li.classList.remove("active")
        };
    };
    return (
        <div className='FAQ'>
            <CaptionPage caption={"FAQ"} desc={"frequently asked question page"} />
            <ul ref={refUl}>
                {
                    data.map(({ id, title, subTitle, contentText }) => (
                        <li className={`${id === 1 ? "active" : ""}`} style={{ height: "49px" }} key={id}>
                            <div onClick={handlerToggleAcoordion} className="head">
                                <span>{title}</span>
                                <span>{subTitle}</span>
                                <i><IoIosArrowDown /></i>
                            </div>
                            <p className="contentText">{contentText}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default FAQ