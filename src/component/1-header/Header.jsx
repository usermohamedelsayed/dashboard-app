import React, { useEffect, useState } from 'react'
// Import File Scss
import "./Header.scss"
// Import Icons
import { FaMoon, FaSearch, FaSun, FaUser } from "react-icons/fa";
import { IoNotifications, IoSettings } from "react-icons/io5";
import { IoMdClose } from 'react-icons/io';
const Header = () => {
    const [darkMood, setDarkMood] = useState(false)
    const [toggleSearchMopile, setToggleSearchMopile] = useState(false)
    const handelrdarkMoodFunc = () => {
        setDarkMood(!darkMood)
        if (!darkMood) {
            document.body.classList.remove("light")
            localStorage.setItem("darkMood", "dark")
        } else {
            document.body.classList.add("light")
            localStorage.setItem("darkMood", "light")
        }
    }
    useEffect(() => {
        document.body.classList.add(localStorage.darkMood || "dark")
        setDarkMood(localStorage.darkMood === "light" ? false : true)
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
                <li onClick={handelrdarkMoodFunc}>
                    {
                        darkMood ? (
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