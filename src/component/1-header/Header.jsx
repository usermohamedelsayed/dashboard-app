import React, { useEffect, useState } from 'react'
// Import File Scss
import "./Header.scss"
// Import Icons
import { FaMoon, FaSearch, FaSun, FaUser } from "react-icons/fa";
import { IoNotifications, IoSettings } from "react-icons/io5";
import { IoMdClose } from 'react-icons/io';
const Header = () => {
    const [theme, setTheme] = useState(false)
    const [toggleSearchMopile, setToggleSearchMopile] = useState(false)
    const handelrThemeFunc = () => {
        setTheme(!theme)
        if (!theme) {
            document.body.classList.remove("light")
            localStorage.setItem("theme", "dark")
        } else {
            document.body.classList.add("light")
            localStorage.setItem("theme", "light")
        }
    }
    useEffect(() => {
        document.body.classList.add(localStorage.theme || "light")
        setTheme(localStorage.theme === "dark" ? true : false)
    }, [])
    return (
        <div className='Header'>
            <div className={`search_box ${toggleSearchMopile ? "open" : ""}`}>
                <input type="text" placeholder='Search ...' />
                <i className='btn_search'>
                    {
                        toggleSearchMopile ? (
                            <IoMdClose onClick={() => setToggleSearchMopile(false)} />
                        ) : <FaSearch />
                    }
                </i>
            </div>
            <ul className="box_icons">
                <li className='btnSearchMopile' onClick={() => setToggleSearchMopile(true)}><FaSearch /></li>
                <li onClick={handelrThemeFunc}>
                    {
                        theme ? (
                            <FaMoon />
                        ) : <FaSun />
                    }
                </li>
                <li><IoNotifications /></li>
                <li><IoSettings /></li>
                <li><FaUser /></li>
            </ul>
        </div>
    )
}

export default Header