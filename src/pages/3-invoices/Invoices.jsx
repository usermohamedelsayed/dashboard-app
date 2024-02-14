import React, { useState, useEffect, useRef } from 'react'
import "./Invoices.scss"
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../store/dataUsers'
// Components
import { CaptionPage } from '../../component'
// Icons
import { TiUserDelete } from "react-icons/ti";
import { AiFillDelete } from 'react-icons/ai'
import { MdSwitchAccessShortcutAdd } from 'react-icons/md'
// Sweet Alert
import swal from 'sweetalert'
const dataColumns = [
    "id",
    "name",
    "email",
    "age",
    "address",
    "zipcode",
    "phone",
    "access",
]
const dataInputProcess = ["=", ">", "<", ">=", "<="]
const Invoices = () => {
    const dispatch = useDispatch()
    const refInputsCols = useRef(null)
    const refInputProcess = useRef(null)
    const refInputValue = useRef(null)
    const refInpSearch = useRef(null)
    const refValTitleInpCol = useRef(null)
    const refValTitleInpProcess = useRef(null)
    const { dataTableUsers } = useSelector(state => state.dataUsersSlice);
    const [data, setData] = useState([])
    const [toggleSetting, setToggleSetting] = useState("")
    const [showHideCols, setShowHideCols] = useState({
        id: true,
        name: true,
        email: true,
        age: true,
        address: true,
        zipcode: true,
        phone: true,
        access: true,
    })
    const [statusSearch, setStatusSearch] = useState(false)
    const [toggleCutTableText, setToggleCutTableText] = useState(false)
    const [densityRow, setDensityRow] = useState(40)
    const [, setReFresh] = useState(0)
    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setReFresh(e.target.innerWidth)
        })
        if (document.body.clientWidth <= 767) {
            setShowHideCols({
                id: true,
                name: true,
                email: false,
                age: false,
                address: false,
                zipcode: true,
                phone: false,
                access: true,
            })
            setToggleCutTableText(true)
        } else {
            setShowHideCols({
                id: true,
                name: true,
                email: true,
                age: true,
                address: true,
                zipcode: true,
                phone: true,
                access: true,
            })
            setToggleCutTableText(false)
        }
    }, [])
    useEffect(() => {
        setData([...dataTableUsers.flatMap(item => [...item])])
    }, [dataTableUsers])
    useEffect(() => {
        refInputsCols.current.style.height = "45px"
        refInputProcess.current.style.height = "45px"
        refInputValue.current.style.height = "45px"
    }, [])
    const handelrBoxFilterInputs = (refrence) => {
        if (refrence.current.style.height === "45px") {
            refrence.current.style.height = refrence.current.scrollHeight + "px"
        } else {
            refrence.current.style.height = "45px"
        }
    }
    const handlerOpenNextBox = (e, boxCurr, titleBox) => {
        titleBox.current.innerText = e.target.innerText
        let title = titleBox.current.innerText.toLowerCase()
        boxCurr.current.style.height = "45px"
        if (title === "id" || title === "age" || title === "zipcode") {
            refInputProcess.current.style.height = refInputProcess.current.scrollHeight + "px"
        } else {
            refInputProcess.current.style.height = "45px"
            refInputValue.current.style.height = refInputValue.current.scrollHeight + "px"
            refInpSearch.current.focus()
        }
    }
    const handlerFilterCols = (e) => {
        let valCol_1 = refValTitleInpCol.current.innerText.toLowerCase()
        let valCol_2 = refValTitleInpProcess.current.innerText.toLowerCase()
        if (e.target.value !== "") {
            let newData = [...dataTableUsers.flatMap(item => [...item])]
            if (valCol_1 !== "columns") {
                setStatusSearch(true)
                switch (valCol_1) {
                    case "id":
                    case "age":
                    case "zipcode":
                        switch (valCol_2) {
                            case "=":
                                return setData(newData.filter(el => Number(el[valCol_1]) === +e.target.value))
                            case "<":
                                return setData(newData.filter(el => Number(el[valCol_1]) < +e.target.value))
                            case ">":
                                return setData(newData.filter(el => Number(el[valCol_1]) > +e.target.value))
                            case "<=":
                                return setData(newData.filter(el => Number(el[valCol_1]) <= +e.target.value))
                            case ">=":
                                return setData(newData.filter(el => Number(el[valCol_1]) >= +e.target.value))
                            default: return "nulll";
                        }
                    default:
                        return setData(newData.filter(el => el[valCol_1 === "name" ? "fullname" : valCol_1].includes(e.target.value.toLowerCase())));
                }
            }
        } else {
            setData([...dataTableUsers.flatMap(item => [...item])])
            setStatusSearch(false)
        }
    }
    const handlerTableText = (text, cat, num) => {
        if (toggleCutTableText) {
            return `${text.slice(0, num)}..`
        } else {
            if (statusSearch) {
                let val = refInpSearch.current.value.toLowerCase()
                let prevWord = text.slice(0, text.indexOf(val))
                let nextWord = text.slice(prevWord.length + val.length)
                switch (cat) {
                    case refValTitleInpCol.current.innerText.toLowerCase():
                        return <>{prevWord} <span className='selectResultSearch'>{val}</span> <span style={{ textTransform: "lowercase" }}>{nextWord}</span></>
                    default: return text
                }
            } else {
                return text
            }
        }
    }
    const handlerShowHideCols = (item) => {
        setShowHideCols(prev => ({ ...prev, [item]: !prev[item] }))
    }
    const handlerResetDefaultShowCols = () => {
        if (document.body.clientWidth <= 767) {
            setShowHideCols({
                id: true,
                name: true,
                email: false,
                age: false,
                address: false,
                zipcode: true,
                phone: false,
                access: true,
            })
        } else {
            setShowHideCols({
                id: true,
                name: true,
                email: true,
                age: true,
                address: true,
                zipcode: true,
                phone: true,
                access: true,
            })
        }
    }
    const handlerShowAllCols = () => {
        setShowHideCols({
            id: true,
            name: true,
            email: true,
            age: true,
            address: true,
            zipcode: true,
            phone: true,
            access: true,
        })
    }
    const handlerHideAllCols = () => {
        setShowHideCols({
            id: false,
            name: false,
            email: false,
            age: false,
            address: false,
            zipcode: false,
            phone: false,
            access: false,
        })
    }
    const handlerResetBoxDensty = () => {
        setDensityRow(40)
        if (document.body.clientWidth >= 767) {
            setToggleCutTableText(false)
        } else {
            setToggleCutTableText(true)
        }
    }
    const removeTDFunc = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your imaginary file has been deleted!", {
                        icon: "success",
                    });
                    dispatch(removeUser(+id))
                } else {
                    swal("Your imaginary file is safe!");
                }
            });
    }
    return (
        <div className='Invoices'>
            <CaptionPage caption={"inovices"} desc={"list of inovices balances"} />
            <div className="settingTable">
                <ul className="listSetting">
                    <li className={`itemSetting ${toggleSetting === "columns" ? "active" : ""}`} onClick={() => setToggleSetting(toggleSetting === "columns" ? "" : "columns")}>columns</li>
                    <li className={`itemSetting ${toggleSetting === "filter" ? "active" : ""}`} onClick={() => setToggleSetting(toggleSetting === "filter" ? "" : "filter")}>filter</li>
                    <li className={`itemSetting ${toggleSetting === "density" ? "active" : ""}`} onClick={() => setToggleSetting(toggleSetting === "density" ? "" : "density")}>density</li>
                </ul>
                <div className={`boxSetting boxToggleCols ${toggleSetting === "columns" ? "active" : ""}`}>
                    <div className="btnsToggleCols">
                        {
                            dataColumns.map(item => (
                                <div key={item} className="toggleCol">
                                    <input checked={showHideCols[item.toLowerCase()]} id={item} type="checkbox" />
                                    <label htmlFor={item} onClick={() => handlerShowHideCols(item)}>{item}</label>
                                </div>
                            ))
                        }
                    </div>
                    <div className="btnsControle">
                        <button className='btnShadow' onClick={handlerResetDefaultShowCols}>reset</button>
                        <button className='btnShadow' onClick={handlerShowAllCols}>show all</button>
                        <button className='btnShadow' onClick={handlerHideAllCols}>hide all</button>
                    </div>
                </div>
                <div className={`boxSetting boxFilterCols ${toggleSetting === "filter" ? "active" : ""}`}>
                    <div ref={refInputsCols} className="inputCol">
                        <p ref={refValTitleInpCol} className="title" onClick={() => handelrBoxFilterInputs(refInputsCols)}>columns</p>
                        {
                            dataColumns.map(item => (
                                <span key={Math.random()} onClick={(e) => handlerOpenNextBox(e, refInputsCols, refValTitleInpCol)}>{item}</span>
                            ))
                        }
                    </div>
                    <div ref={refInputProcess} className="inputProcess">
                        <p ref={refValTitleInpProcess} className="title" onClick={() => handelrBoxFilterInputs(refInputProcess)}>process</p>
                        {
                            dataInputProcess.map(item => (
                                <span key={Math.random()} onClick={(e) => handlerOpenNextBox(e, refInputProcess, refValTitleInpProcess)}>{item}</span>
                            ))
                        }
                    </div>
                    <div ref={refInputValue} className="inputValue">
                        <p className="title" onClick={() => handelrBoxFilterInputs(refInputValue)}>value</p>
                        <input onChange={handlerFilterCols} ref={refInpSearch} type="text" placeholder='value search..' />
                    </div>
                </div>
                <div className={`boxSetting boxDensityRows ${toggleSetting === "density" ? "active" : ""}`}>
                    <div className="rangeBox">
                        <p className="title">density rows</p>
                        <input
                            className='range'
                            type="range"
                            step={"any"}
                            min={0}
                            max={80}
                            onChange={(e) => setDensityRow(+e.target.value)}
                            value={densityRow}
                        />
                    </div>
                    <div className="toggleCut" onClick={() => setToggleCutTableText(!toggleCutTableText)}>
                        <label htmlFor='toggleCutIcon'><MdSwitchAccessShortcutAdd /></label>
                        <input
                            className='toggleInput'
                            id='toggleCutIcon'
                            type="checkbox"
                            checked={toggleCutTableText}
                        />
                    </div>
                    <button className='btnShadow' onClick={handlerResetBoxDensty}>reset</button>
                </div>
            </div>
            <div className="containerTable">
                <div className={`backDrob ${toggleSetting !== "" ? "active" : ""}`} onClick={() => setToggleSetting("")}></div>
                <table>
                    <thead>
                        <tr>
                            <th className={showHideCols.id ? "show" : "hide"}>id</th>
                            <th className={showHideCols.name ? "show" : "hide"}>name</th>
                            <th className={showHideCols.email ? "show" : "hide"}>email</th>
                            <th className={showHideCols.age ? "show" : "hide"}>age</th>
                            <th className={showHideCols.address ? "show" : "hide"}>address</th>
                            <th className={showHideCols.zipcode ? "show" : "hide"}>zipCode</th>
                            <th className={showHideCols.phone ? "show" : "hide"}>phone</th>
                            <th className={showHideCols.access ? "show" : "hide"}>access</th>
                            <th className={showHideCols.access ? "show" : "hide"}> <i><TiUserDelete /></i> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => (
                                <tr key={item.id} style={{ height: densityRow + "px" }}>
                                    <td className={showHideCols.id ? "show" : "hide"}>{item.id}</td>
                                    <td className={showHideCols.name ? "show" : "hide"}>{handlerTableText(item.fullname, "name", 3)}</td>
                                    <td className={showHideCols.email ? "show" : "hide"}>{handlerTableText(item.email, "email", 3)}</td>
                                    <td className={showHideCols.age ? "show" : "hide"}>{item.age}</td>
                                    <td className={showHideCols.address ? "show" : "hide"}>{handlerTableText(item.address, "address", 3)}</td>
                                    <td className={showHideCols.zipcode ? "show" : "hide"}>{item.zipcode}</td>
                                    <td className={showHideCols.phone ? "show" : "hide"}>{handlerTableText(item.phone, "phone", 3)}</td>
                                    <td className={showHideCols.access ? "show" : "hide"}>{handlerTableText(item.access, "access", 3)}</td>
                                    <td onClick={() => removeTDFunc(+item.id)} className={showHideCols.access ? "show" : "hide"}> <i><AiFillDelete /></i></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Invoices