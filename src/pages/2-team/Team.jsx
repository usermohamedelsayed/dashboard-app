import React, { useEffect, useRef, useState } from 'react'
import "./Team.scss"
import { CaptionPage } from '../../component'
// Icons
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Mousewheel } from 'swiper/modules';
import { IoIosArrowUp } from 'react-icons/io';
import { useSelector } from 'react-redux';

const Team = () => {
    const { dataTableUsers } = useSelector(state => state.dataUsersSlice)
    const [data, setData] = useState([])
    const refBoxSearch = useRef(null)
    const refInputSearch = useRef(null)
    const refFristPagination = useRef(null)
    const refSecondPagination = useRef(null)
    const refBtnPrev = useRef(null)
    const refBtnNext = useRef(null)
    const [toggleSearchBox, setToggleSearchBox] = useState(false)
    const [valProcessSearch, setValProcessSearch] = useState("name")
    const [numsPagination, setNumsPagination] = useState({ first: 1, second: 2, three: 3 })
    const [statusSearch, setStatusSearch] = useState(false)
    const [detailsUser, setDetailsUser] = useState({})
    const [toggleDetailsUser, setToggleDetailsUser] = useState(false)
    const [, setReFresh] = useState(0)
    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setReFresh(e.target.innerWidth)
        })
    }, [])
    useEffect(() => {
        setData(dataTableUsers)
    }, [dataTableUsers])
    // Function open && close search box
    const handlerToggleSearchBox = () => {
        setToggleSearchBox(!toggleSearchBox)
        if (toggleSearchBox) {
            refBoxSearch.current.style.height = "40px"
        } else {
            refBoxSearch.current.style.height = refBoxSearch.current.scrollHeight + "px"
        }
    }
    // Function change process search
    const handlerProcessSearc = (e) => {
        handlerToggleSearchBox()
        setValProcessSearch(e.target.innerText.toLowerCase())
        refInputSearch.current.value = ""
        refInputSearch.current.focus()
    }
    // Function cut th && td
    const handleTableText = (text, cat, num) => {
        if (statusSearch) {
            if (document.body.clientWidth > 767) {
                let val = refInputSearch.current.value.toLowerCase()
                let prevWord = text.slice(0, text.indexOf(val));
                let nextWord = text.slice(prevWord.length + val.length)
                switch (cat) {
                    case valProcessSearch:
                        return <>{prevWord} <span className='selectResultSearch'>{val}</span> <span style={{ textTransform: "lowercase" }}>{nextWord}</span></>
                    default: return text
                }
            } else {
                return `${text.slice(0, num)}..`
            }
        } else {
            if (document.body.clientWidth <= 767) {
                return `${text.slice(0, num)}..`
            }
            return text
        }
    }
    // Function get next page
    const getNextPage = () => {
        if (numsPagination.second < data.length) {
            if (refFristPagination.current.className === "active") {
                refFristPagination.current.className = ""
                refSecondPagination.current.className = "active"
            } else {
                setNumsPagination(prev => ({ first: prev.first + 1, second: prev.second + 1, }))
            }
            refBtnPrev.current.style.display = "flex"
            setTimeout(() => (
                document.querySelector(".swiper-button-next").click()
            ), 20)
        } else {
            refBtnNext.current.style.display = "none"
        }
    }
    // Function get prev page
    const getPrevPage = () => {
        if (numsPagination.first === 1) {
            refFristPagination.current.className = "active"
            refSecondPagination.current.className = ""
            refBtnPrev.current.style.display = "none"
        } else {
            setNumsPagination(prev => ({ first: prev.first - 1, second: prev.second - 1, }))
        }
        refBtnNext.current.style.display = "flex"
        setTimeout(() => {
            document.querySelector(".swiper-button-prev").click()
        }, 20)
    }
    // Function return result vaild process search
    const handlerFilterSearch = (e) => {
        let val = (e.target.value.toLowerCase())
        if (val.length) {
            setStatusSearch(true)
            let newData = [...dataTableUsers.flatMap(item => item)]
                .filter(obj => obj[valProcessSearch === "name" ? "fullname" : valProcessSearch].toString().includes(val))
            setData([newData])
        } else {
            setStatusSearch(false)
            setData(dataTableUsers)
            setNumsPagination({ first: 1, second: 2, three: 3 })
        }
    }
    // Function handler show & hide & details user
    const handelrDetailsUser = (obj) => {
        setDetailsUser(obj)
        setToggleDetailsUser(true)
    }
    return (
        <div className='Team'>
            <CaptionPage caption={"manage team"} desc="managing the team members" />
            <div className={`popupDetailsUser ${toggleDetailsUser ? "active" : ""}`}>
                <div className="backDrob" onClick={() => setToggleDetailsUser(false)}></div>
                <ul >
                    <li>ID: {detailsUser.id}</li>
                    <li>name: {detailsUser.fullname}</li>
                    <li>email: <span style={{ textTransform: "lowercase" }}>{detailsUser.email}</span></li>
                    <li>age: {detailsUser.age}</li>
                    <li>phone: {detailsUser.phone}</li>
                    <li>access: {detailsUser.access}</li>
                </ul>
            </div>
            <div className="containerTable">
                <div ref={refBoxSearch} className="boxSearch">
                    <div className="head">
                        <input ref={refInputSearch} onChange={handlerFilterSearch} type="text" placeholder={`Search of team by ( ${valProcessSearch} )`} />
                        <i className={`btnSearch  ${!toggleSearchBox ? "open" : ""}`} onClick={handlerToggleSearchBox}><IoIosArrowUp /></i>
                    </div>
                    <div className="categoriesSearch">
                        <span onClick={handlerProcessSearc}>name</span>
                        <span onClick={handlerProcessSearc}>email</span>
                        <span onClick={handlerProcessSearc}>age</span>
                        <span onClick={handlerProcessSearc}>phone</span>
                        <span onClick={handlerProcessSearc}>access</span>
                    </div>
                </div>

                <Swiper
                    navigation={true}
                    modules={[Navigation, Mousewheel]}
                    cssMode={true}
                    keyboard={false}
                    mousewheel={true}
                    className="mySwiper"
                >
                    {
                        data.map(item => (
                            <SwiperSlide key={Math.random()}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>name</th>
                                            <th>email</th>
                                            <th>age</th>
                                            <th>phone</th>
                                            <th>access</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            item.map((el, i) => (
                                                <tr key={Math.random()} onClick={() => handelrDetailsUser(el)}>
                                                    <td>{el.id}</td>
                                                    <td>{handleTableText(el.fullname, "name", 3)}</td>
                                                    <td style={{ textTransform: "lowercase" }}>{handleTableText(el.email, "email", 3)}</td>
                                                    <td>{el.age}</td>
                                                    <td>{handleTableText(el.phone, "phone", 4)}</td>
                                                    <td>{handleTableText(el.access, "access", 3)}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                {
                    !statusSearch ? (
                        <div className="pagenation">
                            <button ref={refBtnPrev} className="btnPrev" onClick={getPrevPage} ><FaArrowLeft /></button>
                            <ul>
                                <li ref={refFristPagination} className='active' >{numsPagination.first}</li>
                                <li ref={refSecondPagination}>{numsPagination.second}</li>...
                                <li>{data.length}</li>
                            </ul>
                            <button ref={refBtnNext} className="btnNext" onClick={getNextPage}><FaArrowRight /></button>
                        </div>
                    ) : ""
                }
            </div>
        </div >
    )
}

export default Team